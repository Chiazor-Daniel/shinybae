import React from "react";
import { Instagram, Heart } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface FooterProps {
  onPageChange?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl md:text-3xl font-dancing font-bold text-gradient mb-4 md:mb-6">
              {SITE_CONFIG.business.name}
            </h3>
            <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8 font-inter leading-relaxed">
              {SITE_CONFIG.business.tagline}
            </p>
            <div className="flex space-x-4 md:space-x-6">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rose-400 transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 md:w-7 md:h-7" />
              </a>
              <a
                href={SITE_CONFIG.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rose-400 transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-white/10"
                aria-label="TikTok"
              >
                <svg
                  className="w-6 h-6 md:w-7 md:h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg md:text-xl font-playfair font-semibold mb-4 md:mb-6">
              Contact
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="text-sm md:text-base text-gray-300 font-inter">
                <span className="text-rose-400">Email:</span>
                <br />
                {SITE_CONFIG.emails.general}
                <br />
                {SITE_CONFIG.emails.support}
              </li>
              {/*<li className="text-sm md:text-base text-gray-300 font-inter">
                <span className="text-rose-400">Address:</span>
                <br />
                {SITE_CONFIG.business.address.street}
                <br />
                {SITE_CONFIG.business.address.city},{" "}
                {SITE_CONFIG.business.address.state}{" "}
                {SITE_CONFIG.business.address.zipCode}
                <br />
                {SITE_CONFIG.business.address.country}
              </li>*/}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-lg md:text-xl font-playfair font-semibold mb-4 md:mb-6">
              About
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="text-sm md:text-base text-gray-300 font-inter leading-relaxed">
                Cruelty-free & vegan cosmetics
              </li>
              <li className="text-sm md:text-base text-gray-300 font-inter leading-relaxed">
                Handcrafted with love
              </li>
              <li className="text-sm md:text-base text-gray-300 font-inter leading-relaxed">
                Free shipping over ${SITE_CONFIG.shipping.freeShippingThreshold}
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg md:text-xl font-playfair font-semibold mb-4 md:mb-6">
              Legal
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <button
                  onClick={() => onPageChange?.("privacy")}
                  className="text-sm md:text-base text-gray-300 hover:text-rose-400 transition-all duration-300 font-inter hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange?.("terms")}
                  className="text-sm md:text-base text-gray-300 hover:text-rose-400 transition-all duration-300 font-inter hover:translate-x-1 inline-block"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 md:mt-16 pt-8 md:pt-12 text-center">
          <p className="text-xs md:text-base text-gray-300 flex flex-wrap items-center justify-center font-inter gap-2">
            {SITE_CONFIG.business.copyright}
          </p>
          <p className="text-gray-400 text-xs md:text-xs mt-2 md:mt-3 font-inter">
            Designed by{" "}
            <span className="text-rose-400 font-semibold">
              {SITE_CONFIG.business.designer}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
