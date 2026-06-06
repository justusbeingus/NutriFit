import React from "react";

export const BottomNavBar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "dashboard", icon: "home", label: "Home" },
    { id: "add_meal", icon: "add_circle", label: "Add Meal" },
    { id: "history", icon: "history", label: "History" },
    { id: "workouts", icon: "fitness_center", label: "Workouts" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-xl border-t border-outline-variant/30 shadow-lg w-full z-50 py-xs px-lg flex justify-around items-center pb-[calc(env(safe-area-inset-bottom)+8px)]">
      <div className="flex justify-around items-center w-full max-w-[28rem] mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              aria-label={tab.label}
              className={`flex flex-col items-center justify-center rounded-xl transition-all duration-150 ${
                isActive 
                  ? "bg-primary-container text-on-primary-container p-2 w-12 h-12 shadow-sm" 
                  : "text-on-surface-variant hover:bg-surface-container-high p-2 w-12 h-12"
              }`}
            >
              <span 
                className="material-symbols-outlined text-[24px]"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {tab.icon}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
export default BottomNavBar;
