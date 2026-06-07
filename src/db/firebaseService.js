import { db } from "../firebase";
import { 
  collection, 
  doc, 
  getDoc, 
  setDoc, 
  addDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  getDocs,
  runTransaction
} from "firebase/firestore";
import { foodDatabase } from "./foodDatabase";
import { workoutTemplates } from "./workoutTemplates";

// -----------------------------------------------------------------------------
// USER PROFILE MANAGEMENT
// -----------------------------------------------------------------------------

export const createOrFetchUser = async (firebaseUser) => {
  if (!firebaseUser || !firebaseUser.uid) return null;
  
  const userRef = doc(db, "users", firebaseUser.uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    // Return existing profile
    return userSnap.data();
  } else {
    // Create new profile with null targets
    const newUser = {
      uid: firebaseUser.uid,
      name: firebaseUser.displayName || "User",
      email: firebaseUser.email || "",
      profile_picture: firebaseUser.photoURL || "",
      created_at: new Date().toISOString(),
      current_weight: null,
      target_weight: null,
      activity_level: null,
      age: null,
      height: null,
      gender: null,
      calorie_target: null,
      protein_target: null,
      carb_target: null,
      fat_target: null,
      micronutrient_targets: {
        iron: null,
        calcium: null,
        fiber: null,
        vitamin_b12: null,
        vitamin_c: null
      }
    };
    
    await setDoc(userRef, newUser);
    return newUser;
  }
};

export const saveGoalProfile = async (uid, weight, targetWeight, activityLevel, age, height, gender) => {
  // 1. Calculate the new biological targets
  let bmr = 10 * weight + 6.25 * height - 5 * age;
  if (gender === "male") {
    bmr += 5;
  } else {
    bmr -= 161;
  }

  let multiplier = 1.2;
  if (activityLevel === "light") multiplier = 1.375;
  else if (activityLevel === "moderate") multiplier = 1.55;
  else if (activityLevel === "active") multiplier = 1.725;

  const tdee = bmr * multiplier;

  let calorieTarget = Math.round(tdee);
  if (targetWeight < weight) {
    calorieTarget = Math.round(tdee - 500); // weight loss deficit
  } else if (targetWeight > weight) {
    calorieTarget = Math.round(tdee + 300); // weight gain surplus
  }
  calorieTarget = Math.max(calorieTarget, 1200);

  const proteinTarget = Math.round(weight * 2.0); // 2.0g per kg
  const fatTarget = Math.round((calorieTarget * 0.25) / 9); // 25% fat
  const carbTarget = Math.round(Math.max(calorieTarget - (proteinTarget * 4 + fatTarget * 9), 0) / 4);

  const ironTarget = gender === "female" ? 18 : 8;
  const calciumTarget = 1000;
  const fiberTarget = gender === "female" ? 25 : 38;
  const b12Target = 2.4;
  const vitCTarget = 90;

  // 2. Prepare the update payload
  const profileUpdates = {
    current_weight: Number(weight),
    target_weight: Number(targetWeight),
    activity_level: activityLevel,
    age: Number(age),
    height: Number(height),
    gender,
    calorie_target: calorieTarget,
    protein_target: proteinTarget,
    carb_target: carbTarget,
    fat_target: fatTarget,
    micronutrient_targets: {
      iron: ironTarget,
      calcium: calciumTarget,
      fiber: fiberTarget,
      vitamin_b12: b12Target,
      vitamin_c: vitCTarget
    }
  };

  // 3. Update Firestore
  const userRef = doc(db, "users", uid);
  await setDoc(userRef, profileUpdates, { merge: true });

  // 4. Fetch and return the full updated profile
  const userSnap = await getDoc(userRef);
  return userSnap.data();
};

// -----------------------------------------------------------------------------
// CUSTOM FOODS
// -----------------------------------------------------------------------------

export const addCustomFood = async (uid, customFoodData) => {
  const customFoodsRef = collection(db, "users", uid, "custom_foods");
  const docRef = await addDoc(customFoodsRef, {
    ...customFoodData,
    created_at: new Date().toISOString()
  });
  return { id: docRef.id, ...customFoodData };
};

export const getUserCustomFoods = async (uid) => {
  const customFoodsRef = collection(db, "users", uid, "custom_foods");
  const q = query(customFoodsRef);
  const snapshot = await getDocs(q);
  const foods = [];
  snapshot.forEach(doc => {
    foods.push({ id: doc.id, ...doc.data() });
  });
  return foods;
};

// -----------------------------------------------------------------------------
// MEAL LOGGING & DAILY SUMMARIES
// -----------------------------------------------------------------------------


export const saveMeal = async (uid, foodId, portionName, quantity, mealType, dateStr, customFood = null) => {
  const food = customFood || foodDatabase.find(f => f.id === foodId);
  if (!food) throw new Error("Food item not found");


  const portion = food.portions.find(p => p.name === portionName) || { grams: 100 };
  const totalGrams = portion.grams * quantity;
  const scale = totalGrams / 100;
  const baseNutrients = food.nutrition_per_100g;

  const mealData = {
    user_id: uid,
    date: dateStr,
    food_id: foodId,
    food_name: food.name,
    meal_type: mealType,
    portion_name: portionName,
    grams_logged: totalGrams,
    quantity: quantity,
    calories: Math.round(baseNutrients.calories * scale),
    protein: parseFloat((baseNutrients.protein * scale).toFixed(1)),
    carbs: parseFloat((baseNutrients.carbs * scale).toFixed(1)),
    fats: parseFloat((baseNutrients.fats * scale).toFixed(1)),
    iron: parseFloat((baseNutrients.iron * scale).toFixed(2)),
    calcium: Math.round(baseNutrients.calcium * scale),
    fiber: parseFloat((baseNutrients.fiber * scale).toFixed(1)),
    vitamin_b12: parseFloat((baseNutrients.vitamin_b12 * scale).toFixed(2)),
    vitamin_c: parseFloat((baseNutrients.vitamin_c * scale).toFixed(1)),
    timestamp: new Date().toISOString() // store as ISO string
  };

  // Run a transaction to simultaneously create the meal log AND increment the daily summary
  const summaryRef = doc(db, "daily_summaries", `${uid}_${dateStr}`);

  try {
    const docRef = await addDoc(collection(db, "meals"), mealData);
    const addedMeal = { id: docRef.id, ...mealData };

    await runTransaction(db, async (transaction) => {
      const summaryDoc = await transaction.get(summaryRef);
      
      if (!summaryDoc.exists()) {
        transaction.set(summaryRef, {
          user_id: uid,
          date: dateStr,
          calories_consumed: mealData.calories,
          protein_consumed: mealData.protein,
          carbs_consumed: mealData.carbs,
          fats_consumed: mealData.fats,
          iron_consumed: mealData.iron,
          calcium_consumed: mealData.calcium,
          fiber_consumed: mealData.fiber,
          vitamin_b12_consumed: mealData.vitamin_b12,
          vitamin_c_consumed: mealData.vitamin_c,
        });
      } else {
        const current = summaryDoc.data();
        transaction.update(summaryRef, {
          calories_consumed: (current.calories_consumed || 0) + mealData.calories,
          protein_consumed: parseFloat(((current.protein_consumed || 0) + mealData.protein).toFixed(1)),
          carbs_consumed: parseFloat(((current.carbs_consumed || 0) + mealData.carbs).toFixed(1)),
          fats_consumed: parseFloat(((current.fats_consumed || 0) + mealData.fats).toFixed(1)),
          iron_consumed: parseFloat(((current.iron_consumed || 0) + mealData.iron).toFixed(2)),
          calcium_consumed: (current.calcium_consumed || 0) + mealData.calcium,
          fiber_consumed: parseFloat(((current.fiber_consumed || 0) + mealData.fiber).toFixed(1)),
          vitamin_b12_consumed: parseFloat(((current.vitamin_b12_consumed || 0) + mealData.vitamin_b12).toFixed(2)),
          vitamin_c_consumed: parseFloat(((current.vitamin_c_consumed || 0) + mealData.vitamin_c).toFixed(1)),
        });
      }
    });

    return addedMeal;
  } catch (error) {
    console.error("Error saving meal transaction:", error);
    throw error;
  }
};

export const deleteMeal = async (uid, mealId, dateStr) => {
  const mealRef = doc(db, "meals", mealId);
  const summaryRef = doc(db, "daily_summaries", `${uid}_${dateStr}`);

  try {
    await runTransaction(db, async (transaction) => {
      const mealDoc = await transaction.get(mealRef);
      if (!mealDoc.exists()) throw new Error("Meal not found");
      
      const mealData = mealDoc.data();
      if (mealData.user_id !== uid) throw new Error("Unauthorized");

      const summaryDoc = await transaction.get(summaryRef);
      
      if (summaryDoc.exists()) {
        const current = summaryDoc.data();
        transaction.update(summaryRef, {
          calories_consumed: Math.max(0, (current.calories_consumed || 0) - mealData.calories),
          protein_consumed: Math.max(0, parseFloat(((current.protein_consumed || 0) - mealData.protein).toFixed(1))),
          carbs_consumed: Math.max(0, parseFloat(((current.carbs_consumed || 0) - mealData.carbs).toFixed(1))),
          fats_consumed: Math.max(0, parseFloat(((current.fats_consumed || 0) - mealData.fats).toFixed(1))),
          iron_consumed: Math.max(0, parseFloat(((current.iron_consumed || 0) - mealData.iron).toFixed(2))),
          calcium_consumed: Math.max(0, (current.calcium_consumed || 0) - mealData.calcium),
          fiber_consumed: Math.max(0, parseFloat(((current.fiber_consumed || 0) - mealData.fiber).toFixed(1))),
          vitamin_b12_consumed: Math.max(0, parseFloat(((current.vitamin_b12_consumed || 0) - mealData.vitamin_b12).toFixed(2))),
          vitamin_c_consumed: Math.max(0, parseFloat(((current.vitamin_c_consumed || 0) - mealData.vitamin_c).toFixed(1))),
        });
      }
      transaction.delete(mealRef);
    });
  } catch (error) {
    console.error("Error deleting meal:", error);
    throw error;
  }
};

export const getUserMeals = async (uid, dateStr) => {
  const q = query(
    collection(db, "meals"), 
    where("user_id", "==", uid),
    where("date", "==", dateStr),
    orderBy("timestamp", "desc")
  );
  
  const snapshot = await getDocs(q);
  const meals = [];
  snapshot.forEach(doc => {
    meals.push({ id: doc.id, ...doc.data() });
  });
  return meals;
};

export const getDailySummary = async (uid, dateStr) => {
  const summaryRef = doc(db, "daily_summaries", `${uid}_${dateStr}`);
  const summarySnap = await getDoc(summaryRef);
  
  if (summarySnap.exists()) {
    return summarySnap.data();
  } else {
    // Return empty schema if no data logged yet today
    return {
      date: dateStr,
      user_id: uid,
      calories_consumed: 0,
      protein_consumed: 0,
      carbs_consumed: 0,
      fats_consumed: 0,
      iron_consumed: 0,
      calcium_consumed: 0,
      fiber_consumed: 0,
      vitamin_b12_consumed: 0,
      vitamin_c_consumed: 0
    };
  }
};

export const getWorkouts = (goal, equipment, duration) => {
  return workoutTemplates.filter(w => 
    w.goal === goal && 
    w.equipment === equipment && 
    w.duration === Number(duration)
  );
};
