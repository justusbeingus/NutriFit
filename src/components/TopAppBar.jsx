import React from "react";
import { useAuth } from "../context/AuthContext";

export const TopAppBar = ({ onTitleClick }) => {
  const { user, logout } = useAuth();

  const handleAvatarClick = () => {
    if (window.confirm("Do you want to log out of your current session?")) {
      logout();
    }
  };

  // Provide a fallback if photo isn't available
  const photoUrl = user?.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.displayName || "User")}&background=006e2f&color=fff`;

  return (
    <header className="bg-surface/80 dark:bg-surface-dim/80 docked full-width top-0 sticky backdrop-blur-md transition-all duration-200 z-40 border-b border-surface-container-high/30">
      <div className="flex justify-between items-center px-container-padding h-touch-target w-full max-w-[28rem] mx-auto">
        <div className="flex items-center gap-xs">
          <button 
            onClick={handleAvatarClick}
            aria-label="User profile options"
            className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high shrink-0 active:scale-95 transition-transform border border-outline-variant/30"
          >
            <img 
              alt="User avatar" 
              className="w-full h-full object-cover" 
              src={photoUrl}
            />
          </button>
        </div>
        <h1 
          onClick={onTitleClick}
          className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim cursor-pointer select-none"
        >
          NutriFast
        </h1>
        {/* Placeholder for symmetry to keep title perfectly centered */}
        <div className="w-8 h-8"></div>
      </div>
    </header>
  );
};
export default TopAppBar;
