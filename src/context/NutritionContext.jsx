import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { 
  createOrFetchUser,
  saveGoalProfile as dbSaveGoalProfile,
  saveMeal as dbSaveMeal,
  deleteMeal as dbDeleteMeal,
  getDailySummary as dbGetDailySummary,
  getUserMeals as dbGetUserMeals,
  addCustomFood as dbAddCustomFood,
  getUserCustomFoods as dbGetUserCustomFoods
} from "../db/firebaseService";

const NutritionContext = createContext(null);

export const NutritionProvider = ({ children }) => {
  const { user } = useAuth(); // Globally authenticated user from Firebase
  
  const [profile, setProfile] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [dailySummary, setDailySummary] = useState(null);
  const [dailyMeals, setDailyMeals] = useState([]);
  const [customFoods, setCustomFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Core Data Fetcher
  const fetchDataForDate = async (uid, dateStr, currentProfile) => {
    try {
      const summary = await dbGetDailySummary(uid, dateStr);
      const meals = await dbGetUserMeals(uid, dateStr);
      
      // Calculate derived stats for UI
      const derivedSummary = computeDetailedSummary(summary, currentProfile, dateStr);
      setDailySummary({ ...derivedSummary, meals });
      setDailyMeals(meals);
    } catch (error) {
      console.error("Failed to fetch daily data:", error);
    }
  };

  // 1. Listen for User Auth State Changes (First load or login)
  useEffect(() => {
    let isMounted = true;

    const initUser = async () => {
      if (user) {
        setIsLoading(true);
        try {
          const userProfile = await createOrFetchUser(user);
          if (isMounted) {
            // A profile might just be the initial schema if they haven't run setup
            setProfile(userProfile.calorie_target ? userProfile : null); 
            const userCustomFoods = await dbGetUserCustomFoods(user.uid);
            setCustomFoods(userCustomFoods);
            await fetchDataForDate(user.uid, selectedDate, userProfile);
          }
        } catch (error) {
          console.error("Error initializing user data:", error);
        } finally {
          if (isMounted) setIsLoading(false);
        }
      } else {
        // Logged out
        if (isMounted) {
          setProfile(null);
          setDailySummary(null);
          setDailyMeals([]);
          setCustomFoods([]);
          setIsLoading(false);
        }
      }
    };

    initUser();

    return () => {
      isMounted = false;
    };
  }, [user]); // Re-run when user logs in/out

  // 2. Listen for Date Changes
  useEffect(() => {
    if (user && profile && !isLoading) {
      fetchDataForDate(user.uid, selectedDate, profile);
    }
  }, [selectedDate]);

  // Actions
  const saveGoalProfile = async (weight, targetWeight, activityLevel, age, height, gender) => {
    if (!user) return;
    setIsLoading(true);
    try {
      const updatedProfile = await dbSaveGoalProfile(user.uid, weight, targetWeight, activityLevel, age, height, gender);
      setProfile(updatedProfile);
      await fetchDataForDate(user.uid, selectedDate, updatedProfile);
    } catch (error) {
      console.error("Failed to save goals:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addMealLog = async (foodId, portionName, quantity, mealType, customFood = null) => {
    if (!user) return;
    try {
      await dbSaveMeal(user.uid, foodId, portionName, quantity, mealType, selectedDate, customFood);
      await fetchDataForDate(user.uid, selectedDate, profile);
    } catch (error) {
      console.error("Failed to add meal:", error);
    }
  };

  const addCustomFoodToDb = async (customFoodData) => {
    if (!user) return;
    try {
      const newCustomFood = await dbAddCustomFood(user.uid, customFoodData);
      setCustomFoods(prev => [...prev, newCustomFood]);
      return newCustomFood;
    } catch (error) {
      console.error("Failed to add custom food:", error);
      throw error;
    }
  };

  const deleteMealLog = async (mealId) => {
    if (!user) return;
    try {
      await dbDeleteMeal(user.uid, mealId, selectedDate);
      await fetchDataForDate(user.uid, selectedDate, profile);
    } catch (error) {
      console.error("Failed to delete meal:", error);
    }
  };

  // UI Helper: Computes the 'status' and alerts for the UI based on the raw DB summary
  const computeDetailedSummary = (rawSummary, currentProfile, dateStr) => {
    if (!currentProfile || !currentProfile.calorie_target) return null;

    const checkStatus = (consumed, target) => {
      if (!target) return "adequate";
      const ratio = consumed / target;
      if (ratio < 0.7) return "low";
      if (ratio <= 1.0) return "adequate";
      return "high";
    };

    const micros = {
      iron: {
        consumed: rawSummary.iron_consumed || 0,
        target: currentProfile.micronutrient_targets.iron,
        status: checkStatus(rawSummary.iron_consumed || 0, currentProfile.micronutrient_targets.iron)
      },
      calcium: {
        consumed: rawSummary.calcium_consumed || 0,
        target: currentProfile.micronutrient_targets.calcium,
        status: checkStatus(rawSummary.calcium_consumed || 0, currentProfile.micronutrient_targets.calcium)
      },
      fiber: {
        consumed: rawSummary.fiber_consumed || 0,
        target: currentProfile.micronutrient_targets.fiber,
        status: checkStatus(rawSummary.fiber_consumed || 0, currentProfile.micronutrient_targets.fiber)
      },
      vitamin_b12: {
        consumed: rawSummary.vitamin_b12_consumed || 0,
        target: currentProfile.micronutrient_targets.vitamin_b12,
        status: checkStatus(rawSummary.vitamin_b12_consumed || 0, currentProfile.micronutrient_targets.vitamin_b12)
      },
      vitamin_c: {
        consumed: rawSummary.vitamin_c_consumed || 0,
        target: currentProfile.micronutrient_targets.vitamin_c,
        status: checkStatus(rawSummary.vitamin_c_consumed || 0, currentProfile.micronutrient_targets.vitamin_c)
      }
    };

    const alerts = [];
    if (micros.iron.status === "low") {
      alerts.push({ id: "iron", type: "warning", message: "Low iron today", advice: "Consider adding spinach, lentils, or beans to dinner." });
    }
    if (micros.calcium.status === "low") {
      alerts.push({ id: "calcium", type: "info", message: "Low calcium intake", advice: "A glass of milk, curd, or paneer could help hit your goal." });
    }
    if (micros.vitamin_b12.status === "low") {
      alerts.push({ id: "b12", type: "info", message: "Low B12 intake today", advice: "Add eggs, curd, or milk, or check if B12 supplements are needed." });
    }

    return {
      date: dateStr,
      calories: { consumed: rawSummary.calories_consumed || 0, target: currentProfile.calorie_target },
      protein: { consumed: rawSummary.protein_consumed || 0, target: currentProfile.protein_target },
      carbs: { consumed: rawSummary.carbs_consumed || 0, target: currentProfile.carb_target },
      fats: { consumed: rawSummary.fats_consumed || 0, target: currentProfile.fat_target },
      micros,
      alerts
    };
  };

  return (
    <NutritionContext.Provider value={{
      profile,
      selectedDate,
      setSelectedDate,
      dailySummary,
      dailyMeals,
      customFoods,
      isLoading,
      saveGoalProfile,
      addMealLog,
      addCustomFoodToDb,
      deleteMealLog,
      setDate: setSelectedDate
    }}>
      {children}
    </NutritionContext.Provider>
  );
};

export const useNutrition = () => {
  const context = useContext(NutritionContext);
  if (!context) {
    throw new Error("useNutrition must be used within a NutritionProvider");
  }
  return context;
};
