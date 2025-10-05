/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
      colors: {
        blush: {
          50: "#fef7f7",
          100: "#fdeaea",
          200: "#fbd5d5",
          300: "#f8b4b4",
          400: "#f48888",
          500: "#ec5a5a",
          600: "#d73c3c",
          700: "#b52d2d",
          800: "#962929",
          900: "#7c2828",
        },
        "rose-gold": {
          50: "#fef8f3",
          100: "#fdeee6",
          200: "#fad9c7",
          300: "#f6bfa3",
          400: "#f19a7d",
          500: "#ec7c5c",
          600: "#dd5f42",
          700: "#b84a37",
          800: "#933e35",
          900: "#773530",
        },
        pearl: {
          50: "#fefefe",
          100: "#fdfdfd",
          200: "#fafafa",
          300: "#f5f5f5",
          400: "#eeeeee",
          500: "#e0e0e0",
          600: "#c2c2c2",
          700: "#9e9e9e",
          800: "#757575",
          900: "#424242",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "bounce-soft": "bounceSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "0.8" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(236, 90, 90, 0.3)",
        "glow-lg": "0 0 40px rgba(236, 90, 90, 0.4)",
        pearl: "0 4px 20px rgba(255, 255, 255, 0.1)",
        retro: "0 8px 32px rgba(0, 0, 0, 0.12)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        shimmer:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
      },
    },
  },
  plugins: [],
};
