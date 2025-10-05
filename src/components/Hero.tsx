import React from "react";
import { ArrowRight, Sparkles, Heart } from "lucide-react";

interface HeroProps {
  onShopClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-100 via-rose-50 to-rose-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-rose-200 rounded-full opacity-40 animate-bounce-soft"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-rose-300 rounded-full opacity-25 animate-pulse-soft"></div>
        <div
          className="absolute bottom-20 right-1/3 w-16 h-16 bg-rose-300 rounded-full opacity-35 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-gray-900 mb-8 leading-tight text-shadow relative">
              <span className="block animate-fade-in font-dancing">
                Shiny Lips,
              </span>
              <span
                className="block text-gradient animate-fade-in font-dancing z-50"
                style={{ animationDelay: "0.2s" }}
              >
                Shiny Confidence
              </span>
            </h1>

            <p
              className="text-xl text-gray-700 mb-10 max-w-lg mx-auto lg:mx-0 font-inter leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              Luxurious, handcrafted lip glosses that moisturize, shine, and
              empower.
              <span className="text-gradient font-semibold">
                {" "}
                Discover your perfect shade
              </span>{" "}
              and let your confidence glow like never before.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <button
                onClick={onShopClick}
                className="btn-primary inline-flex items-center text-lg group"
              >
                <Sparkles className="mr-3 group-hover:animate-spin" size={20} />
                Shop Our Collection
                <ArrowRight
                  className="ml-3 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
            </div>
          </div>

          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-rose-300 to-rose-300 rounded-full opacity-60 animate-pulse-soft"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-rose-300 to-rose-300 rounded-full opacity-40 animate-float"></div>
            <div
              className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-400 rounded-full opacity-50 animate-bounce-soft"
              style={{ animationDelay: "0.5s" }}
            ></div>

            {/* Main Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-retro group">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-200/50 to-rose-500/20 z-10"></div>
              <img
                src=" logo.jpeg"
                alt="Beautiful woman with glossy lips showcasing ShinyBae cosmetics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
