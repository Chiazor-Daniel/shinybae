import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Truck,
  X,
  Sparkles,
  Heart,
  Instagram,
} from "lucide-react";
import { SITE_CONFIG } from "../config/site";

const TopBar: React.FC = () => {
  const [showPromo, setShowPromo] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promos = [
    {
      icon: <Truck size={14} />,
      text: "Free shipping on orders over $50",
      highlight: true,
    },
    {
      icon: <Sparkles size={14} />,
      text: "New arrivals: 20% off your first order",
      highlight: false,
    },
    {
      icon: <Heart size={14} />,
      text: "Cruelty-free & vegan cosmetics",
      highlight: false,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [promos.length]);

  if (!showPromo) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Animated background */}
      <div className="bg-gradient-to-r from-rose-500 via-rose-500 to-rose-400 text-white text-sm py-2.5 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center">
            {/* Left side - Rotating promos */}
            <div className="flex items-center space-x-6 flex-1">
              <div className="flex items-center space-x-2 transition-all duration-500 ease-in-out">
                {promos[currentPromo].icon}
                <span
                  className={`font-medium transition-all duration-300 ${
                    promos[currentPromo].highlight ? "animate-pulse" : ""
                  }`}
                >
                  {promos[currentPromo].text}
                </span>
              </div>
            </div>

            {/* Right side - Links and Social */}
            <div className="flex items-center space-x-4 text-sm">
              {/* Social Media */}
              <div className="hidden md:flex items-center space-x-2">
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200 p-1"
                  aria-label="Instagram"
                >
                  <Instagram size={14} />
                </a>
                <a
                  href={SITE_CONFIG.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200 p-1"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>

              {/* Close button */}
              <button
                onClick={() => setShowPromo(false)}
                className="ml-2 p-1 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Close announcement"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Progress indicator for rotating promos */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20">
          <div
            className="h-full bg-white transition-all duration-4000 ease-linear"
            style={{ width: `${((currentPromo + 1) / promos.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
