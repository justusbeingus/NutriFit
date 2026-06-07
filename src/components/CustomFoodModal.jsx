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

  const inputStyle = {
    width: "100%",
    backgroundColor: "#e7eefe",
    border: "1px solid rgba(188,203,185,0.3)",
    borderRadius: "12px",
    padding: "12px",
    fontSize: "16px",
    color: "#151c27",
    outline: "none",
    boxSizing: "border-box"
  };

  const labelStyle = {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    color: "#3d4a3d",
    marginBottom: "4px"
  };

  return (
    <div 
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(4px)",
        padding: "16px"
      }}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#ffffff",
          width: "100%",
          maxWidth: "380px",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          padding: "24px"
        }}
      >
        <h2 className="font-headline-md text-headline-md text-on-surface" style={{ marginBottom: "8px" }}>Create Custom Food</h2>
        <p className="text-body-md text-on-surface-variant" style={{ marginBottom: "24px" }}>
          Add a specific packaged food or custom meal.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Food Name *</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Protein Bar"
              style={inputStyle}
            />
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
            <div>
              <label style={labelStyle}>Calories *</label>
              <input
                type="number"
                required
                min="0"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="kcal"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Protein (g)</label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                placeholder="g"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Carbs (g)</label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={carbs}
                onChange={(e) => setCarbs(e.target.value)}
                placeholder="g"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Fats (g)</label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={fats}
                onChange={(e) => setFats(e.target.value)}
                placeholder="g"
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", paddingTop: "8px" }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "14px",
                backgroundColor: "#e7eefe",
                color: "#151c27",
                border: "none",
                cursor: "pointer"
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "14px",
                backgroundColor: "#006e2f",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                opacity: isSubmitting ? 0.5 : 1
              }}
            >
              {isSubmitting ? "Adding..." : "Add Food"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
