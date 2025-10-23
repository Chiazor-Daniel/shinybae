import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

const InstallPWA: React.FC = () => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Detect iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iOS);

    // Listen for Android install prompt
    const handleInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setInstallPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleInstallPrompt);

    // If already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstallable(false);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;

    try {
      await installPrompt.prompt();
      const choiceResult = await installPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted install prompt");
        setIsInstallable(false);
      }
    } catch (err) {
      console.error("Install failed:", err);
    }
  };

  // --- iOS Custom Prompt ---
  if (isIOS && !window.matchMedia("(display-mode: standalone)").matches && !isDismissed) {
    return (
      <div className="fixed bottom-4 left-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 border border-rose-100">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        <p className="text-gray-800 font-medium">
          📱 To install this app: tap the <strong>Share</strong> button ↓ and select{" "}
          <strong>Add to Home Screen</strong>.
        </p>
      </div>
    );
  }

  // --- Android Prompt ---
  if ((!isInstallable && !isIOS) || isDismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 border border-rose-100">
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        ✕
      </button>
      <div className="flex items-center justify-between">
        <div className="flex-1 mr-4">
          <p className="text-gray-800 font-medium">Install this app for a better experience</p>
          <p className="text-sm text-gray-500 mt-1">Offline access, faster loading, and more!</p>
        </div>
        <button
          onClick={handleInstall}
          className="bg-rose-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-rose-600 transition-colors"
        >
          <Download size={18} className="mr-2" />
          Install
        </button>
      </div>
    </div>
  );
};

export default InstallPWA;

