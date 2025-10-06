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

  useEffect(() => {
    // Check if it's iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // Listen for the beforeinstallprompt event
    const handleInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setInstallPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleInstallPrompt);

    // Check if already installed
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
        console.log("User accepted the install prompt");
        setIsInstallable(false);
      }
    } catch (err) {
      console.error("Error installing app:", err);
    }
  };

  if (!isInstallable && !isIOS) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 border border-rose-100">
      <div className="flex items-center justify-between">
        <div className="flex-1 mr-4">
          <p className="text-gray-800 font-medium">
            {isIOS
              ? "Install ShinyBae: Tap the share button and select 'Add to Home Screen'"
              : "Install ShinyBae for a better experience"}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {isIOS
              ? "Get quick access from your home screen"
              : "Access offline, faster loading, and more!"}
          </p>
        </div>
        {!isIOS && (
          <button
            onClick={handleInstall}
            className="bg-rose-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-rose-600 transition-colors duration-200"
          >
            <Download size={18} className="mr-2" />
            Install
          </button>
        )}
      </div>
    </div>
  );
};

export default InstallPWA;
