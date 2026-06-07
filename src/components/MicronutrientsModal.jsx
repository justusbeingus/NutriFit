import React from "react";

export const MicronutrientsModal = ({ isOpen, onClose, micros }) => {
  if (!isOpen || !micros) return null;

  const renderProgressBar = (label, data, unit = "mg") => {
    const { consumed, target, status } = data;
    const progress = target > 0 ? Math.min((consumed / target) * 100, 100) : 0;
    
    // Determine bar color based on status
    let barColor = "bg-primary";
    if (status === "low") barColor = "bg-tertiary";
    if (status === "high") barColor = "bg-error"; // Maybe high iron is bad, high fiber is fine, but we'll use a standard warning color or just primary
    
    // For some nutrients, high is fine (like Vitamin C), so let's stick to primary if adequate/high, tertiary if low.
    if (status === "adequate") barColor = "bg-primary";
    else if (status === "low") barColor = "bg-tertiary";
    else barColor = "bg-secondary"; // "high"

    return (
      <div className="mb-4 last:mb-0">
        <div className="flex justify-between items-end mb-1">
          <span className="font-label-md text-on-surface capitalize">{label.replace("_", " ")}</span>
          <span className="font-label-sm text-on-surface-variant">
            {consumed} / {target} {unit}
          </span>
        </div>
        <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
          <div 
            className={`h-full ${barColor} transition-all duration-500 ease-out`} 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-md animate-fade-in">
      <div className="bg-surface w-full max-w-sm rounded-3xl shadow-elevation-high overflow-hidden animate-slide-up">
        <div className="p-lg bg-surface-container-lowest">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Micronutrients</h2>
            <button 
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center bg-surface-variant rounded-full text-on-surface-variant hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
          
          <div className="space-y-sm">
            {renderProgressBar("Iron", micros.iron, "mg")}
            {renderProgressBar("Calcium", micros.calcium, "mg")}
            {renderProgressBar("Fiber", micros.fiber, "g")}
            {renderProgressBar("Vitamin C", micros.vitamin_c, "mg")}
            {renderProgressBar("Vitamin B12", micros.vitamin_b12, "µg")}
          </div>
        </div>
      </div>
    </div>
  );
};
