import React from "react";
import { useNutrition } from "../context/NutritionContext";

export const MealHistory = () => {
  const { selectedDate, setSelectedDate, dailySummary, deleteMealLog } = useNutrition();

  // Generate 7 relative calendar date tabs (3 days before, today, 3 days after)
  const getDateTabs = () => {
    const tabs = [];
    const today = new Date();
    
    for (let i = -3; i <= 3; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dateStr = d.toISOString().split("T")[0];
      
      const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      tabs.push({
        dateStr,
        dayNum: d.getDate(),
        weekday: weekdays[d.getDay()],
        isToday: dateStr === new Date().toISOString().split("T")[0]
      });
    }
    return tabs;
  };

  const dateTabs = getDateTabs();

  if (!dailySummary) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-container-padding">
        <span className="material-symbols-outlined text-[48px] text-outline-variant animate-spin">history</span>
        <p className="mt-md font-body-lg text-body-lg text-on-surface-variant">Loading meal history...</p>
      </div>
    );
  }

  const { calories, protein, carbs, fats, meals = [] } = dailySummary;

  // Calorie ring parameters
  const calorieConsumed = calories.consumed || 0;
  const calorieTarget = calories.target || 2000;
  const caloriePercent = Math.min((calorieConsumed / calorieTarget) * 100, 100);
  const strokeDasharray = 251.2;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * caloriePercent) / 100;

  // Group meals
  const mealTypes = [
    { id: "breakfast", label: "Breakfast", icon: "bakery_dining", colorClass: "text-primary" },
    { id: "lunch", label: "Lunch", icon: "set_meal", colorClass: "text-secondary" },
    { id: "dinner", label: "Dinner", icon: "soup_kitchen", colorClass: "text-tertiary" },
    { id: "snack", label: "Snacks", icon: "cookie", colorClass: "text-on-surface-variant" }
  ];

  const getMealsByType = (type) => meals.filter(m => m.meal_type === type);
  const getMealTypeCalories = (type) => getMealsByType(type).reduce((sum, m) => sum + m.calories, 0);

  return (
    <div className="w-full max-w-[28rem] mx-auto space-y-lg pt-md pb-32">
      {/* 1. Date Navigation Bar */}
      <nav className="px-xs py-sm flex gap-sm overflow-x-auto no-scrollbar border-b border-surface-container-high/30 sticky top-[44px] bg-background/95 backdrop-blur-md z-30 -mx-container-padding px-container-padding">
        <div className="flex gap-sm w-max">
          {dateTabs.map((tab) => {
            const isActive = selectedDate === tab.dateStr;
            return (
              <button
                key={tab.dateStr}
                onClick={() => setSelectedDate(tab.dateStr)}
                className={`flex flex-col items-center justify-center min-w-[60px] py-sm px-xs rounded-xl active:scale-95 transition-all relative ${
                  isActive 
                    ? "bg-primary text-on-primary shadow-md" 
                    : "bg-surface-container text-on-surface-variant"
                }`}
              >
                <span className="font-caption text-caption uppercase leading-none mb-1">{tab.weekday}</span>
                <span className="font-headline-md text-headline-md leading-none">{tab.dayNum}</span>
                {tab.isToday && !isActive && (
                  <div className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-primary"></div>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* 2. Summary Circular Card */}
      <section className="flex items-center gap-md bg-surface-container-lowest rounded-[24px] p-md shadow-soft border border-surface-container-high/30">
        <div className="relative w-[72px] h-[72px] flex-shrink-0 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle 
              className="text-primary/10" 
              cx="50" 
              cy="50" 
              fill="transparent" 
              r="40" 
              stroke="currentColor" 
              strokeWidth="8"
            ></circle>
            <circle 
              className="text-primary transition-all duration-500" 
              cx="50" 
              cy="50" 
              fill="transparent" 
              r="40" 
              stroke="currentColor" 
              strokeDasharray={strokeDasharray} 
              strokeDashoffset={strokeDashoffset} 
              strokeLinecap="round" 
              strokeWidth="8"
            ></circle>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-label-md text-label-md text-on-surface leading-none font-bold">
              {calorieConsumed >= 1000 ? `${(calorieConsumed / 1000).toFixed(1)}k` : calorieConsumed}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-headline-md text-headline-md text-on-surface">Daily Total</h2>
          <div className="flex gap-sm mt-xs">
            <span className="font-caption text-caption text-on-surface-variant">
              <strong className="text-on-surface">{protein.consumed}g</strong> Pro
            </span>
            <span className="font-caption text-caption text-on-surface-variant">
              <strong className="text-on-surface">{carbs.consumed}g</strong> Carb
            </span>
            <span className="font-caption text-caption text-on-surface-variant">
              <strong className="text-on-surface">{fats.consumed}g</strong> Fat
            </span>
          </div>
        </div>
      </section>

      {/* 3. Detailed Meal Group Listings */}
      <section className="space-y-lg">
        {mealTypes.map((type) => {
          const typeMeals = getMealsByType(type.id);
          const typeCalories = getMealTypeCalories(type.id);

          if (typeMeals.length === 0) return null;

          return (
            <div key={type.id} className="space-y-sm">
              <div className="flex justify-between items-end mb-sm px-xs">
                <h3 className="font-headline-lg-mobile text-[18px] text-on-surface tracking-tight font-bold">
                  {type.label}
                </h3>
                <span className="font-label-md text-label-md text-on-surface-variant">{typeCalories} kcal</span>
              </div>

              <div className="space-y-xs">
                {typeMeals.map((meal) => (
                  <div 
                    key={meal.id} 
                    className="bg-surface-container-lowest rounded-[24px] p-md shadow-soft border border-surface-container-high/20 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-md min-w-0">
                      <div className={`w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center ${type.colorClass} flex-shrink-0`}>
                        <span className="material-symbols-outlined text-[24px]">{type.icon}</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-headline-md text-[16px] text-on-surface font-semibold truncate leading-snug">
                          {meal.food_name}
                        </h4>
                        <div className="mt-[2px] flex gap-xs items-center flex-wrap">
                          <span className="bg-surface-container px-sm py-[2px] rounded-full font-caption text-caption text-on-surface-variant">
                            {meal.quantity} × {meal.portion_name}
                          </span>
                          <span className="bg-primary-container/10 px-sm py-[2px] rounded-full font-caption text-caption text-primary font-bold">
                            {meal.protein}g P
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 pl-sm flex items-center gap-sm">
                      <div>
                        <span className="font-headline-md text-headline-md text-on-surface block leading-none">
                          {meal.calories}
                        </span>
                        <span className="font-caption text-caption text-on-surface-variant">kcal</span>
                      </div>
                      <button
                        onClick={() => deleteMealLog(meal.id)}
                        aria-label={`Delete ${meal.food_name}`}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-outline-variant hover:text-error hover:bg-error-container/30 active:scale-90 transition-all"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {meals.length === 0 && (
          <div className="py-xl flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-outline-variant text-[64px] mb-md font-light">
              event_busy
            </span>
            <p className="font-body-lg text-body-lg text-on-surface-variant">No logs recorded for this date.</p>
            <p className="font-caption text-caption text-on-surface-variant/70 mt-xs">
              Use the Home or Add Meal screen to log foods.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
export default MealHistory;
