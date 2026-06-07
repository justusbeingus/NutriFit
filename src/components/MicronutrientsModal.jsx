import React from "react";

export const MicronutrientsModal = ({ isOpen, onClose, micros }) => {
  if (!isOpen || !micros) return null;

  const renderProgressBar = (label, data, unit = "mg") => {
    if (!data) return null;
    const { consumed = 0, target = 0, status = "adequate" } = data;
    const progress = target > 0 ? Math.min((consumed / target) * 100, 100) : 0;
    
    let barColor = "#006e2f"; // primary
    if (status === "low") barColor = "#b91a24"; // tertiary
    else if (status === "high") barColor = "#855300"; // secondary

    return (
      <div style={{ marginBottom: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4px" }}>
          <span className="font-label-md text-on-surface" style={{ textTransform: "capitalize" }}>
            {label.replace("_", " ")}
          </span>
          <span className="text-caption text-on-surface-variant">
            {consumed} / {target} {unit}
          </span>
        </div>
        <div style={{ height: "8px", width: "100%", backgroundColor: "#dce2f3", borderRadius: "9999px", overflow: "hidden" }}>
          <div 
            style={{ 
              height: "100%", 
              width: `${progress}%`, 
              backgroundColor: barColor, 
              borderRadius: "9999px",
              transition: "width 0.5s ease-out" 
            }} 
          />
        </div>
      </div>
    );
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <h2 className="font-headline-md text-headline-md text-on-surface">Micronutrients</h2>
          <button 
            onClick={onClose}
            style={{
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#dce2f3",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer"
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "20px", color: "#3d4a3d" }}>close</span>
          </button>
        </div>
        
        <div>
          {renderProgressBar("Iron", micros.iron, "mg")}
          {renderProgressBar("Calcium", micros.calcium, "mg")}
          {renderProgressBar("Fiber", micros.fiber, "g")}
          {renderProgressBar("Vitamin C", micros.vitamin_c, "mg")}
          {renderProgressBar("Vitamin B12", micros.vitamin_b12, "µg")}
          {(!micros.iron && !micros.calcium && !micros.fiber) && (
            <p className="text-body-md text-on-surface-variant" style={{ textAlign: "center", padding: "16px 0" }}>
              No micronutrient data available yet. Try re-saving your goals.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
