const { onRequest, onCall, HttpsError } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

initializeApp();
const db = getFirestore();

/**
 * 1. calculateGoals
 * Calculates daily caloric, macronutrient, and micronutrient targets based on Mifflin-St Jeor.
 * Input parameters: weight (kg), target_weight (kg), activity_level (sedentary | light | moderate | active), age, height (cm), gender (male | female)
 */
exports.calculateGoals = onCall(async (request) => {
  const { weight, target_weight, activity_level, age, height, gender } = request.data;

  if (!weight || !target_weight || !activity_level || !age || !height || !gender) {
    throw new HttpsError("invalid-argument", "Missing required profile parameters.");
  }

  // 1. Mifflin-St Jeor BMR
  let bmr = 10 * weight + 6.25 * height - 5 * age;
  if (gender === "male") {
    bmr += 5;
  } else {
    bmr -= 161;
  }

  // 2. Activity Multiplier
  let multiplier = 1.2; // default sedentary
  if (activity_level === "light") multiplier = 1.375;
  else if (activity_level === "moderate") multiplier = 1.55;
  else if (activity_level === "active") multiplier = 1.725;

  const tdee = bmr * multiplier;

  // 3. Calorie Adjustments for Goal
  let calorieTarget = Math.round(tdee);
  if (target_weight < weight) {
    calorieTarget = Math.round(tdee - 500); // Deficit for loss
  } else if (target_weight > weight) {
    calorieTarget = Math.round(tdee + 300); // Surplus for gain
  }

  // Cap minimum calories to a safe floor (e.g., 1200 kcal)
  calorieTarget = Math.max(calorieTarget, 1200);

  // 4. Macro Targets
  // Protein: 2.0 g/kg of bodyweight
  const proteinTarget = Math.round(weight * 2.0);
  const proteinCalories = proteinTarget * 4;

  // Fats: ~25% of total calories
  const fatTarget = Math.round((calorieTarget * 0.25) / 9);
  const fatCalories = fatTarget * 9;

  // Carbs: Remaining calories
  const remainingCalories = calorieTarget - (proteinCalories + fatCalories);
  const carbTarget = Math.round(Math.max(remainingCalories, 0) / 4);

  // 5. Micronutrient Targets (RDA guidelines)
  const ironTarget = gender === "female" ? 18 : 8; // mg
  const calciumTarget = 1000; // mg
  const fiberTarget = gender === "female" ? 25 : 38; // g
  const b12Target = 2.4; // mcg
  const vitCTarget = 90; // mg

  const targets = {
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

  // If user is authenticated, save directly to their profile document
  const uid = request.auth ? request.auth.uid : null;
  if (uid) {
    await db.collection("users").doc(uid).set({
      id: uid,
      age,
      gender,
      height,
      current_weight: weight,
      target_weight,
      activity_level,
      ...targets,
      updated_at: FieldValue.serverTimestamp()
    }, { merge: true });
  }

  return targets;
});

/**
 * 2. logMeal
 * Logs a meal eaten by the user, calculates scaled nutrients, and updates the daily aggregate summary.
 * Inputs: foodId, portionName, quantity, mealType (breakfast | lunch | dinner | snack)
 */
exports.logMeal = onCall(async (request) => {
  const uid = request.auth ? request.auth.uid : null;
  if (!uid) {
    throw new HttpsError("unauthenticated", "User must be signed in to log meals.");
  }

  const { foodId, portionName, quantity, mealType } = request.data;
  if (!foodId || !portionName || !quantity || !mealType) {
    throw new HttpsError("invalid-argument", "Missing required parameters to log meal.");
  }

  // 1. Fetch Food Document
  const foodDocRef = db.collection("foods").doc(foodId);
  const foodSnapshot = await foodDocRef.get();
  if (!foodSnapshot.exists) {
    throw new HttpsError("not-found", `Food item with id ${foodId} not found.`);
  }
  const foodData = foodSnapshot.data();

  // 2. Fetch Portion Document to determine grams
  // Using collection group or separate subcollection. Let's find it in portions collection.
  const portionId = `${foodId}_${portionName.replace(/[^a-zA-Z0-9]/g, "_")}`;
  const portionDocRef = db.collection("portions").doc(portionId);
  const portionSnapshot = await portionDocRef.get();
  
  let gramsPerPortion = 100; // fallback default
  if (portionSnapshot.exists) {
    gramsPerPortion = portionSnapshot.data().grams;
  } else {
    // Check if the portionName is literal '100 grams' or has grams inside
    if (portionName.includes("100 grams")) {
      gramsPerPortion = 100;
    } else {
      throw new HttpsError("not-found", `Portion mapping for ${portionName} not found.`);
    }
  }

  const totalGrams = gramsPerPortion * quantity;
  const scale = totalGrams / 100;

  // 3. Compute Nutrients
  const baseNutrients = foodData.nutrition_per_100g;
  const scaledMeal = {
    user_id: uid,
    food_id: foodId,
    food_name: foodData.name,
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
    timestamp: FieldValue.serverTimestamp()
  };

  const todayStr = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const summaryDocId = `${uid}_${todayStr}`;
  const summaryDocRef = db.collection("daily_summary").doc(summaryDocId);

  // 4. Firestore Transaction to log meal and atomically increment daily summary
  await db.runTransaction(async (transaction) => {
    // Create new meal log document
    const newMealRef = db.collection("meals").doc();
    transaction.set(newMealRef, scaledMeal);

    // Fetch user targets to set/merge on daily summary if creating new day
    const userDocRef = db.collection("users").doc(uid);
    const userSnapshot = await transaction.get(userDocRef);
    const userData = userSnapshot.exists ? userSnapshot.data() : null;

    const summarySnapshot = await transaction.get(summaryDocRef);

    if (!summarySnapshot.exists) {
      // Initialize daily summary
      transaction.set(summaryDocRef, {
        user_id: uid,
        date: todayStr,
        calories_consumed: scaledMeal.calories,
        calories_target: userData ? userData.calorie_target : 2000,
        protein_consumed: scaledMeal.protein,
        protein_target: userData ? userData.protein_target : 120,
        carbs_consumed: scaledMeal.carbs,
        carbs_target: userData ? userData.carb_target : 220,
        fats_consumed: scaledMeal.fats,
        fats_target: userData ? userData.fat_target : 60,
        iron_consumed: scaledMeal.iron,
        iron_target: userData ? userData.micronutrient_targets.iron : 10,
        calcium_consumed: scaledMeal.calcium,
        calcium_target: userData ? userData.micronutrient_targets.calcium : 1000,
        fiber_consumed: scaledMeal.fiber,
        fiber_target: userData ? userData.micronutrient_targets.fiber : 30,
        vitamin_b12_consumed: scaledMeal.vitamin_b12,
        vitamin_b12_target: userData ? userData.micronutrient_targets.vitamin_b12 : 2.4,
        vitamin_c_consumed: scaledMeal.vitamin_c,
        vitamin_c_target: userData ? userData.micronutrient_targets.vitamin_c : 90
      });
    } else {
      // Increment aggregate totals
      transaction.update(summaryDocRef, {
        calories_consumed: FieldValue.increment(scaledMeal.calories),
        protein_consumed: FieldValue.increment(scaledMeal.protein),
        carbs_consumed: FieldValue.increment(scaledMeal.carbs),
        fats_consumed: FieldValue.increment(scaledMeal.fats),
        iron_consumed: FieldValue.increment(scaledMeal.iron),
        calcium_consumed: FieldValue.increment(scaledMeal.calcium),
        fiber_consumed: FieldValue.increment(scaledMeal.fiber),
        vitamin_b12_consumed: FieldValue.increment(scaledMeal.vitamin_b12),
        vitamin_c_consumed: FieldValue.increment(scaledMeal.vitamin_c)
      });
    }
  });

  return { success: true, loggedMeal: scaledMeal };
});

/**
 * 3. getDailySummary
 * Compares current day's intake against targets, returns progress and warnings for low/adequate/high micronutrient intakes.
 * Inputs: date (YYYY-MM-DD)
 */
exports.getDailySummary = onCall(async (request) => {
  const uid = request.auth ? request.auth.uid : null;
  if (!uid) {
    throw new HttpsError("unauthenticated", "User must be signed in.");
  }

  const { date } = request.data;
  const queryDate = date || new Date().toISOString().split("T")[0];
  const summaryDocId = `${uid}_${queryDate}`;

  const summarySnapshot = await db.collection("daily_summary").doc(summaryDocId).get();
  
  if (!summarySnapshot.exists) {
    // Fetch user profile to return active targets with zero progress
    const userSnapshot = await db.collection("users").doc(uid).get();
    if (!userSnapshot.exists) {
      return { calories: { consumed: 0, target: 2000 }, protein: { consumed: 0, target: 120 }, alerts: [] };
    }
    const userData = userSnapshot.data();
    return {
      date: queryDate,
      calories: { consumed: 0, target: userData.calorie_target },
      protein: { consumed: 0, target: userData.protein_target },
      carbs: { consumed: 0, target: userData.carb_target },
      fats: { consumed: 0, target: userData.fat_target },
      micros: {
        iron: { consumed: 0, target: userData.micronutrient_targets.iron, status: "low" },
        calcium: { consumed: 0, target: userData.micronutrient_targets.calcium, status: "low" },
        fiber: { consumed: 0, target: userData.micronutrient_targets.fiber, status: "low" },
        vitamin_b12: { consumed: 0, target: userData.micronutrient_targets.vitamin_b12, status: "low" },
        vitamin_c: { consumed: 0, target: userData.micronutrient_targets.vitamin_c, status: "low" }
      },
      alerts: ["Log meals to begin tracking micronutrients today!"]
    };
  }

  const s = summarySnapshot.data();
  
  // Micronutrient Status Grading: Low (<70%), Adequate (70-100%), High (>100%)
  const checkStatus = (consumed, target) => {
    if (!target) return "adequate";
    const ratio = consumed / target;
    if (ratio < 0.7) return "low";
    if (ratio <= 1.0) return "adequate";
    return "high";
  };

  const micros = {
    iron: { consumed: s.iron_consumed, target: s.iron_target, status: checkStatus(s.iron_consumed, s.iron_target) },
    calcium: { consumed: s.calcium_consumed, target: s.calcium_target, status: checkStatus(s.calcium_consumed, s.calcium_target) },
    fiber: { consumed: s.fiber_consumed, target: s.fiber_target, status: checkStatus(s.fiber_consumed, s.fiber_target) },
    vitamin_b12: { consumed: s.vitamin_b12_consumed, target: s.vitamin_b12_target, status: checkStatus(s.vitamin_b12_consumed, s.vitamin_b12_target) },
    vitamin_c: { consumed: s.vitamin_c_consumed, target: s.vitamin_c_target, status: checkStatus(s.vitamin_c_consumed, s.vitamin_c_target) }
  };

  // Create notifications/alerts based on status
  const alerts = [];
  if (micros.iron.status === "low") {
    alerts.push({ id: "iron", type: "warning", message: "Low iron today", advice: "Consider adding spinach or lentils to dinner." });
  }
  if (micros.calcium.status === "low") {
    alerts.push({ id: "calcium", type: "info", message: "Low calcium intake", advice: "A glass of milk or paneer could help hit your goal." });
  }
  if (micros.vitamin_b12.status === "low") {
    alerts.push({ id: "b12", type: "info", message: "Low B12 intake today", advice: "Consider milk, curd, eggs, or B12-fortified cereals." });
  }

  return {
    date: queryDate,
    calories: { consumed: s.calories_consumed, target: s.calories_target },
    protein: { consumed: s.protein_consumed, target: s.protein_target },
    carbs: { consumed: s.carbs_consumed, target: s.carbs_target },
    fats: { consumed: s.fats_consumed, target: s.fats_target },
    micros,
    alerts
  };
});
