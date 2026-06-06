import React, { useState, useEffect } from "react";

export const PWAPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Detect if device is iOS and NOT in standalone mode (already installed)
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isStandalone = window.navigator.standalone === true;

    if (isIOS && !isStandalone) {
      // Show prompt if user hasn't dismissed it this session
      const dismissed = sessionStorage.getItem("nutrifast_pwa_dismissed");
      if (!dismissed) {
        setShowPrompt(true);
      }
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem("nutrifast_pwa_dismissed", "true");
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-[84px] left-md right-md bg-surface-container-high/95 backdrop-blur-md rounded-2xl p-md shadow-float border border-primary/20 z-50 transition-all duration-300 max-w-[24rem] mx-auto">
      <div className="flex gap-sm items-start">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
          <span className="material-symbols-outlined text-[24px]">install_mobile</span>
        </div>
        <div className="flex-1">
          <h3 className="font-label-md text-label-md font-bold text-on-surface">Install NutriFast on iPhone</h3>
          <p className="font-caption text-caption text-on-surface-variant mt-xs">
            Add this app to your Home Screen for a full-screen, native experience:
          </p>
          <ol className="list-decimal list-inside font-caption text-caption text-on-surface mt-sm space-y-1">
            <li>Tap the <span className="font-semibold text-primary">Share</span> button below.</li>
            <li>Scroll down and tap <span className="font-semibold text-primary">"Add to Home Screen"</span>.</li>
          </ol>
        </div>
        <button 
          onClick={handleDismiss}
          aria-label="Dismiss install guide" 
          className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant active:scale-90 transition-all"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>
    </div>
  );
};
export default PWAPrompt;
