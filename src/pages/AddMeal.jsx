import React, { useState, useEffect } from "react";
import { useNutrition } from "../context/NutritionContext";
import { searchFoods, foodDatabase } from "../db/foodDatabase";
import { CustomFoodModal } from "../components/CustomFoodModal";

export const AddMeal = ({ defaultMealType = "breakfast", onMealAdded }) => {
  const { addMealLog, customFoods } = useNutrition();

  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  const [mealType, setMealType] = useState(defaultMealType);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  
  // Selection state
  const [portionName, setPortionName] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Suggested Quick Chips (Staples)
  const quickChips = [
    { id: "wheat_roti", name: "Roti" },
    { id: "white_rice_cooked", name: "Rice" },
    { id: "toor_dal_cooked", name: "Dal" },
    { id: "paneer_raw", name: "Paneer" },
    { id: "chicken_breast_cooked", name: "Chicken" }
  ];

  // Sync defaultMealType if changed by parent
  useEffect(() => {
    setMealType(defaultMealType);
  }, [defaultMealType]);

  // Execute Search
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
    } else {
      const results = searchFoods(searchQuery, customFoods);
      setSearchResults(results);
    }
  }, [searchQuery]);

  // Select a food item
  const handleSelectFood = (food) => {
    setSelectedFood(food);
    setPortionName(food.portions[0].name);
    setQuantity(1);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleChipClick = (foodId) => {
    const food = foodDatabase.find(f => f.id === foodId);
    if (food) {
      handleSelectFood(food);
    }
  };

  // Adjust steppers
  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  // Log meal transaction
  const handleAddMeal = () => {
    if (!selectedFood) return;
    const isCustom = customFoods.some(cf => cf.id === selectedFood.id);
    addMealLog(selectedFood.id, portionName, quantity, mealType, isCustom ? selectedFood : null);
    
    // Reset and notify parent
    setSelectedFood(null);
    if (onMealAdded) onMealAdded();
  };

  // Compute live calculations for selected item
  const getLiveStats = () => {
    if (!selectedFood) return null;
    const selectedPortion = selectedFood.portions.find(p => p.name === portionName) || { grams: 100 };
    const scale = (selectedPortion.grams * quantity) / 100;
    const base = selectedFood.nutrition_per_100g;

    return {
      calories: Math.round(base.calories * scale),
      protein: Math.round(base.protein * scale),
      carbs: Math.round(base.carbs * scale),
      fats: Math.round(base.fats * scale)
    };
  };

  const liveStats = getLiveStats();

  return (
    <div className="w-full max-w-[28rem] mx-auto space-y-lg pt-md pb-32">
      {/* 1. Header & Meal Type dropdown */}
      <section className="flex justify-between items-center bg-surface-container-lowest p-md rounded-2xl shadow-soft">
        <h2 className="font-headline-md text-headline-md text-on-surface">Logging Meal</h2>
        <div className="relative">
          <select
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
            className="h-10 bg-surface-container border border-outline-variant/30 rounded-xl px-sm pr-8 font-label-md text-label-md text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface transition-colors cursor-pointer appearance-none outline-none shadow-sm"
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
          <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">
            arrow_drop_down
          </span>
        </div>
      </section>

      {/* 2. Search Box */}
      <section className="relative">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors z-10 pointer-events-none">
            search
          </span>
          <input
            type="text"
            placeholder="Search food (e.g., Roti, Egg)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-[52px] pl-12 pr-sm rounded-xl bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface border border-transparent focus:border-transparent shadow-soft transition-all placeholder:text-on-surface-variant font-body-lg text-body-lg"
          />
        </div>

        {/* Search Results Dropdown Overlay */}
        {searchResults.length > 0 && (
          <div className="absolute top-[56px] left-0 right-0 bg-surface-container-lowest rounded-xl shadow-float border border-surface-variant/50 max-h-60 overflow-y-auto z-50">
            {searchResults.map((food) => (
              <button
                key={food.id}
                onClick={() => handleSelectFood(food)}
                className="w-full text-left px-md py-sm hover:bg-surface-container flex justify-between items-center border-b border-surface-variant last:border-b-0"
              >
                <div className="flex flex-col">
                  <span className="font-body-md text-body-md text-on-surface font-semibold">{food.name}</span>
                  <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">
                    {food.category}
                  </span>
                </div>
                <span className="font-caption text-caption text-primary bg-primary-container/20 px-sm py-[2px] rounded-full">
                  {food.nutrition_per_100g.calories} kcal/100g
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Add Custom Food Button */}
        {!selectedFood && searchQuery.trim() === "" && (
          <div className="mt-sm">
            <button
              onClick={() => setIsCustomModalOpen(true)}
              className="flex items-center gap-2 text-primary font-label-md hover:bg-primary/10 px-sm py-1 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              Add Custom Food
            </button>
          </div>
        )}
      </section>

      {/* 3. Quick Chips */}
      <section className="overflow-x-auto hide-scrollbar -mx-container-padding px-container-padding">
        <div className="flex gap-sm py-xs w-max">
          {quickChips.map((chip) => (
            <button
              key={chip.id}
              onClick={() => handleChipClick(chip.id)}
              className="px-md py-[8px] rounded-full bg-surface-container border border-outline-variant/30 text-on-surface font-label-md text-label-md whitespace-nowrap hover:bg-surface-container-high active:scale-95 transition-all shadow-sm"
            >
              {chip.name}
            </button>
          ))}
        </div>
      </section>

      {/* 4. Active Selected Item Card */}
      {selectedFood ? (
        <section className="space-y-md">
          <h3 className="font-headline-md text-headline-md text-on-surface">Selected Item</h3>
          <div className="bg-surface-bright rounded-[24px] p-md shadow-soft border border-surface-variant/50 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-primary rounded-l-[24px]"></div>
            
            {/* Header info */}
            <div className="flex justify-between items-start mb-md pl-xs">
              <div>
                <h4 className="font-headline-md text-headline-md text-on-surface">{selectedFood.name}</h4>
                <div className="flex items-center gap-xs mt-1">
                  <span className="font-label-md text-label-md text-on-surface-variant font-bold">
                    {liveStats.calories} kcal
                  </span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                  <div className="flex gap-2 font-caption text-caption">
                    <span className="text-secondary font-semibold">{liveStats.carbs}g C</span>
                    <span className="text-primary font-semibold">{liveStats.protein}g P</span>
                    <span className="text-tertiary font-semibold">{liveStats.fats}g F</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedFood(null)}
                aria-label="Clear selection"
                className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest hover:text-error active:scale-90 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Portion Dropdown and Stepper */}
            <div className="flex gap-sm items-center pl-xs flex-col sm:flex-row">
              {/* Portion dropdown */}
              <div className="relative w-full sm:flex-[2]">
                <select
                  value={portionName}
                  onChange={(e) => setPortionName(e.target.value)}
                  className="w-full h-touch-target appearance-none bg-surface-container-low border border-outline-variant/40 rounded-xl px-sm pr-10 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:bg-surface transition-colors cursor-pointer shadow-sm outline-none"
                >
                  {selectedFood.portions.map(p => (
                    <option key={p.name} value={p.name}>{p.name}</option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                  arrow_drop_down
                </span>
              </div>

              {/* Quantity Stepper */}
              <div className="flex w-full sm:flex-[1] items-center justify-between border border-outline-variant/40 rounded-xl bg-surface-container-low h-touch-target overflow-hidden shadow-sm">
                <button
                  onClick={decrementQuantity}
                  aria-label="Decrease quantity"
                  className="w-[44px] h-full flex items-center justify-center text-on-surface hover:bg-surface-container-highest active:bg-surface-variant transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">remove</span>
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  readOnly
                  className="w-12 h-full text-center border-none p-0 font-headline-md text-headline-md text-on-surface bg-transparent m-0 focus:ring-0 select-none pointer-events-none"
                />
                <button
                  onClick={incrementQuantity}
                  aria-label="Increase quantity"
                  className="w-[44px] h-full flex items-center justify-center text-primary hover:bg-surface-container-highest active:bg-surface-variant transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* 5. Recent Foods Database items */}
      <section className="space-y-md">
        <h3 className="font-headline-md text-headline-md text-on-surface">Recent Foods</h3>
        <div className="flex flex-col gap-sm">
          {foodDatabase.slice(0, 4).map((food) => (
            <div
              key={food.id}
              className="flex items-center justify-between bg-surface rounded-xl p-xs pr-sm shadow-sm border border-surface-variant/30 hover:bg-surface-container-lowest transition-colors group"
            >
              <div className="flex items-center gap-sm">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary/70 shrink-0">
                  <span className="material-symbols-outlined text-[24px]">
                    {food.category === "Meat" ? "egg_alt" : food.category === "Fruits" ? "bento" : "rice_bowl"}
                  </span>
                </div>
                <div>
                  <h4 className="font-body-lg text-body-lg text-on-surface font-semibold leading-tight">{food.name}</h4>
                  <p className="font-label-md text-label-md text-on-surface-variant mt-1">
                    {food.portions[0].name} • {food.nutrition_per_100g.calories} kcal/100g
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleSelectFood(food)}
                aria-label={`Select ${food.name}`}
                className="w-10 h-10 rounded-full bg-surface-container-low text-on-surface-variant flex items-center justify-center hover:bg-primary hover:text-on-primary hover:shadow-md active:scale-90 transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'wght' 500" }}>
                  add
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Docked CTA Add Button */}
      {selectedFood && (
        <div className="fixed bottom-[72px] left-0 right-0 px-container-padding pb-md pt-xl bg-gradient-to-t from-surface via-surface/90 to-transparent z-30 flex justify-center pointer-events-none">
          <button
            onClick={handleAddMeal}
            className="w-full max-w-[28rem] h-[52px] rounded-xl bg-primary text-on-primary font-headline-md text-headline-md shadow-[0_8px_16px_rgba(0,110,47,0.25)] flex items-center justify-center gap-sm active:scale-95 transition-transform pointer-events-auto hover:opacity-90"
          >
            <span>Log to {mealType.charAt(0).toUpperCase() + mealType.slice(1)}</span>
            <span className="px-2 py-[2px] bg-white/20 rounded-md font-label-md text-label-md">
              {liveStats.calories} kcal
            </span>
          </button>
        </div>
      )}
      {/* Custom Food Modal */}
      <CustomFoodModal 
        isOpen={isCustomModalOpen} 
        onClose={() => setIsCustomModalOpen(false)}
        onFoodAdded={(food) => handleSelectFood(food)}
      />
    </div>
  );
};
export default AddMeal;
