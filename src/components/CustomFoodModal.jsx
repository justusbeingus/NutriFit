import React, { useState } from "react";
import { useNutrition } from "../context/NutritionContext";

export const CustomFoodModal = ({ isOpen, onClose, onFoodAdded }) => {
  const { addCustomFoodToDb } = useNutrition();
  
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !calories) return;

    setIsSubmitting(true);
    
    // Construct the standard food object schema
    const customFoodData = {
      name: name,
      category: "Custom Food",
      nutrition_per_100g: {
        calories: Number(calories),
        protein: Number(protein) || 0,
        carbs: Number(carbs) || 0,
        fats: Number(fats) || 0,
        fiber: 0,
        iron: 0,
        calcium: 0,
        vitamin_b12: 0,
        vitamin_c: 0
      },
      portions: [
        { name: "1 Serving", grams: 100 }
      ]
    };

    try {
      const addedFood = await addCustomFoodToDb(customFoodData);
      setName("");
      setCalories("");
      setProtein("");
      setCarbs("");
      setFats("");
      onFoodAdded(addedFood);
      onClose();
    } catch (error) {
      console.error("Failed to add custom food", error);
      alert("Failed to add custom food. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-md animate-fade-in">
      <div className="bg-surface w-full max-w-sm rounded-3xl shadow-elevation-high overflow-hidden animate-slide-up">
        <div className="p-lg bg-surface-container-lowest">
          <h2 className="font-headline-sm text-headline-sm text-on-surface mb-2">Create Custom Food</h2>
          <p className="text-body-md text-on-surface-variant mb-6">
            Add a specific packaged food or custom meal.
          </p>

          <form onSubmit={handleSubmit} className="space-y-md">
            <div>
              <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Food Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Protein Bar"
                className="w-full bg-surface-container border border-outline-variant/30 rounded-xl p-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary outline-none transition-shadow"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-md">
              <div>
                <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Calories *</label>
                <input
                  type="number"
                  required
                  min="0"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                  placeholder="kcal"
                  className="w-full bg-surface-container border border-outline-variant/30 rounded-xl p-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary outline-none transition-shadow"
                />
              </div>
              <div>
                <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Protein (g)</label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={protein}
                  onChange={(e) => setProtein(e.target.value)}
                  placeholder="g"
                  className="w-full bg-surface-container border border-outline-variant/30 rounded-xl p-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary outline-none transition-shadow"
                />
              </div>
              <div>
                <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Carbs (g)</label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={carbs}
                  onChange={(e) => setCarbs(e.target.value)}
                  placeholder="g"
                  className="w-full bg-surface-container border border-outline-variant/30 rounded-xl p-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary outline-none transition-shadow"
                />
              </div>
              <div>
                <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Fats (g)</label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={fats}
                  onChange={(e) => setFats(e.target.value)}
                  placeholder="g"
                  className="w-full bg-surface-container border border-outline-variant/30 rounded-xl p-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary outline-none transition-shadow"
                />
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-full font-label-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 px-4 rounded-full font-label-lg bg-primary text-on-primary hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Adding..." : "Add Food"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
