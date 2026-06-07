import React, { useState } from "react";
import { useNutrition } from "../context/NutritionContext";
import { MicronutrientsModal } from "../components/MicronutrientsModal";

export const Dashboard = ({ onAddMealClick }) => {
  const { dailySummary, deleteMealLog } = useNutrition();
  const [isMicrosModalOpen, setIsMicrosModalOpen] = useState(false);

  if (!dailySummary) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] px-container-padding text-center">
        <span className="material-symbols-outlined text-[48px] text-outline-variant animate-pulse">nutrition</span>
        <p className="mt-md font-body-lg text-body-lg text-on-surface-variant">Loading your summary...</p>
      </div>
    );
  }

  const { calories, protein, carbs, fats, alerts = [], meals = [] } = dailySummary;

  // Calorie circular progress calculations
  const calorieConsumed = calories.consumed || 0;
  const calorieTarget = calories.target || 2000;
  const caloriePercent = Math.min((calorieConsumed / calorieTarget) * 100, 100);
  const strokeDasharray = 251.2; // 2 * pi * r (r=40)
  const strokeDashoffset = strokeDasharray - (strokeDasharray * caloriePercent) / 100;

  // Macro progress percentage
  const proteinPercent = Math.min(((protein.consumed || 0) / (protein.target || 120)) * 100, 100);
  const carbsPercent = Math.min(((carbs.consumed || 0) / (carbs.target || 220)) * 100, 100);
  const fatsPercent = Math.min(((fats.consumed || 0) / (fats.target || 60)) * 100, 100);

  // Group meals by type
  const mealTypes = [
    { id: "breakfast", label: "Breakfast", icon: "wb_sunny", colorClass: "text-secondary-container" },
    { id: "lunch", label: "Lunch", icon: "clear_day", colorClass: "text-secondary-fixed-dim" },
    { id: "dinner", label: "Dinner", icon: "dark_mode", colorClass: "text-surface-tint" },
    { id: "snack", label: "Snacks", icon: "cookie", colorClass: "text-tertiary-container" }
  ];

  const getMealsByType = (type) => meals.filter(m => m.meal_type === type);

  const getMealTypeCalories = (type) => {
    return getMealsByType(type).reduce((sum, m) => sum + m.calories, 0);
  };

  return (
    <div className="w-full max-w-[28rem] mx-auto space-y-lg pt-md pb-32">
      {/* 1. Hero Calorie Circle & Macros */}
      <section className="bg-surface-container-lowest rounded-3xl p-lg shadow-soft relative overflow-hidden border border-surface-container-high/40">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-container opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary-container opacity-10 rounded-full blur-2xl pointer-events-none"></div>
        
        <h2 className="font-headline-md text-headline-md text-on-surface mb-xs relative z-10">Today's Summary</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-lg relative z-10">
          {caloriePercent >= 95 ? "Goal completed! Excellent job!" : "You're on track to hit your goals."}
        </p>

        {/* Circular Ring */}
        <div className="flex flex-col items-center justify-center mb-xl relative z-10">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle 
                className="text-primary-container/10" 
                cx="50" 
                cy="50" 
                fill="transparent" 
                r="40" 
                stroke="currentColor" 
                strokeWidth="8"
              ></circle>
              <circle 
                className="text-primary transition-all duration-700 ease-out" 
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
            <div className="absolute flex flex-col items-center">
              <span className="font-display-data text-display-data text-on-surface">{calorieConsumed}</span>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                / {calorieTarget} kcal
              </span>
            </div>
          </div>
        </div>

        {/* Macros Grid */}
        <div className="grid grid-cols-3 gap-xs relative z-10">
          {/* Protein */}
          <div className="bg-surface p-sm rounded-xl border border-surface-variant flex flex-col items-center shadow-sm">
            <span className="font-label-md text-label-md text-on-surface-variant mb-base">Protein</span>
            <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden mb-xs">
              <div 
                className="h-full bg-primary-container rounded-full transition-all duration-500" 
                style={{ width: `${proteinPercent}%` }}
              ></div>
            </div>
            <span className="font-body-md text-body-md font-semibold text-on-surface">
              {protein.consumed}g <span className="font-normal text-caption text-on-surface-variant">/ {protein.target}g</span>
            </span>
          </div>

          {/* Carbs */}
          <div className="bg-surface p-sm rounded-xl border border-surface-variant flex flex-col items-center shadow-sm">
            <span className="font-label-md text-label-md text-on-surface-variant mb-base">Carbs</span>
            <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden mb-xs">
              <div 
                className="h-full bg-secondary-container rounded-full transition-all duration-500" 
                style={{ width: `${carbsPercent}%` }}
              ></div>
            </div>
            <span className="font-body-md text-body-md font-semibold text-on-surface">
              {carbs.consumed}g <span className="font-normal text-caption text-on-surface-variant">/ {carbs.target}g</span>
            </span>
          </div>

          {/* Fats */}
          <div className="bg-surface p-sm rounded-xl border border-surface-variant flex flex-col items-center shadow-sm">
            <span className="font-label-md text-label-md text-on-surface-variant mb-base">Fats</span>
            <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden mb-xs">
              <div 
                className="h-full bg-tertiary-container rounded-full transition-all duration-500" 
                style={{ width: `${fatsPercent}%` }}
              ></div>
            </div>
            <span className="font-body-md text-body-md font-semibold text-on-surface">
              {fats.consumed}g <span className="font-normal text-caption text-on-surface-variant">/ {fats.target}g</span>
            </span>
          </div>
        </div>
      </section>

      {/* 1.5. Micronutrient Insights Card */}
      <section>
        <button 
          onClick={() => setIsMicrosModalOpen(true)}
          className="w-full bg-primary-container text-on-primary-container p-md rounded-2xl flex items-center justify-between shadow-soft hover:bg-primary-container/90 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px]">vital_signs</span>
            <div className="text-left">
              <h3 className="font-label-lg font-semibold">Micronutrient Insights</h3>
              <p className="font-caption text-caption opacity-80">View your daily vitamins and minerals</p>
            </div>
          </div>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </section>

      {/* 2. Warnings Alerts Section */}
      {alerts.length > 0 && (
        <section className="space-y-sm">
          {alerts.map((alert) => (
            <div 
              key={alert.id} 
              className={`p-md rounded-xl flex items-center gap-sm shadow-sm transition-all duration-200 ${
                alert.type === "warning" 
                  ? "bg-error-container text-on-error-container" 
                  : "bg-surface-container text-on-surface border border-surface-variant"
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                alert.type === "warning" ? "bg-error/10" : "bg-primary/10"
              }`}>
                <span className={`material-symbols-outlined ${
                  alert.type === "warning" ? "text-error" : "text-primary"
                }`}>
                  {alert.type === "warning" ? "warning" : "info"}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-label-md text-label-md font-bold">{alert.message}</h3>
                <p className="font-caption text-caption opacity-90">{alert.advice}</p>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* 3. Meal Cards Group */}
      <section className="space-y-md">
        <h2 className="font-headline-md text-headline-md text-on-surface">Today's Meals</h2>
        
        {mealTypes.map((type) => {
          const typeMeals = getMealsByType(type.id);
          const typeCalories = getMealTypeCalories(type.id);
          const hasMeals = typeMeals.length > 0;

          return (
            <div 
              key={type.id} 
              className={`bg-surface-container-lowest rounded-2xl p-md shadow-soft border ${
                hasMeals ? "border-transparent" : "border-dashed border-outline-variant/50"
              }`}
            >
              <div className="flex justify-between items-center mb-sm">
                <div className="flex items-center gap-xs">
                  <span className={`material-symbols-outlined ${type.colorClass}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                    {type.icon}
                  </span>
                  <h3 className="font-headline-md text-[18px] font-semibold text-on-surface">{type.label}</h3>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant font-bold">
                  {typeCalories} kcal
                </span>
              </div>

              {hasMeals ? (
                <div className="space-y-xs">
                  {typeMeals.map((meal) => (
                    <div 
                      key={meal.id} 
                      className="flex justify-between items-center py-xs border-b border-surface-variant last:border-b-0"
                    >
                      <div className="flex flex-col">
                        <span className="font-body-md text-body-md text-on-surface font-medium">{meal.food_name}</span>
                        <span className="font-caption text-caption text-on-surface-variant">
                          {meal.quantity} × {meal.portion_name} ({meal.grams_logged}g)
                        </span>
                      </div>
                      <div className="flex items-center gap-xs">
                        <span className="font-caption text-caption text-on-surface font-semibold shrink-0">
                          {meal.calories} kcal
                        </span>
                        <button
                          onClick={() => deleteMealLog(meal.id)}
                          aria-label={`Delete ${meal.food_name}`}
                          className="w-8 h-8 rounded-full flex items-center justify-center text-outline-variant hover:text-error hover:bg-error-container/30 active:scale-90 transition-all ml-xs"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <button 
                    onClick={() => onAddMealClick(type.id)}
                    className="w-full mt-sm py-sm flex items-center justify-center gap-xs text-primary font-label-md text-label-md hover:bg-surface-container-low rounded-lg transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Add to {type.label}
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-md">
                  <p className="font-caption text-caption text-on-surface-variant mb-sm">Nothing logged yet.</p>
                  <button 
                    onClick={() => onAddMealClick(type.id)}
                    className="w-full py-sm flex items-center justify-center gap-xs bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-primary-fixed rounded-lg transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Log {type.label}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Floating Action Button (FAB) */}
      <button 
        onClick={() => onAddMealClick("breakfast")}
        aria-label="Quick Add Meal" 
        className="fixed bottom-[88px] right-lg md:bottom-lg w-14 h-14 bg-primary text-on-primary rounded-2xl shadow-float flex items-center justify-center hover:opacity-90 active:scale-95 transition-all duration-200 z-40 md:right-xl"
      >
        <span className="material-symbols-outlined text-[32px]">add</span>
      </button>

      <MicronutrientsModal 
        isOpen={isMicrosModalOpen} 
        onClose={() => setIsMicrosModalOpen(false)} 
        micros={dailySummary?.detailedSummary?.micros}
      />
    </div>
  );
};
export default Dashboard;
