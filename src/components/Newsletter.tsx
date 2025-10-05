import React, { useState } from "react";
import { Mail, Send } from "lucide-react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-rose-400 via-rose-400 to-rose-500 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/15 rounded-full animate-bounce-soft"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/20 rounded-full animate-pulse-soft"></div>
        <div
          className="absolute bottom-10 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8 animate-pulse-soft">
          <Mail className="text-white" size={32} />
        </div>
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 text-shadow-lg animate-fade-in">
          Join the Shiny Club
        </h2>
        <p
          className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-inter leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Get exclusive access to new shade launches, beauty tips, and special
          offers. Be the first to know about everything ShinyBae!
          <span className="inline-block animate-bounce-soft ml-2">💕</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex gap-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-8 max-sm:w-1/3 py-4 rounded-full border-0 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 font-inter"
              required
            />
            <button
              type="submit"
              disabled={isSubscribed}
              className="px-10 py-4 bg-white text-rose-500 font-semibold rounded-full hover:bg-rose-50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 shadow-rose group"
            >
              {isSubscribed ? (
                <span className="text-green-500 text-xl">✓</span>
              ) : (
                <Send
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              )}
            </button>
          </div>
        </form>

        {isSubscribed && (
          <p className="text-white/90 mt-6 animate-fade-in font-inter">
            Welcome to the Shiny Club! Check your email for a special welcome
            gift 🎁
          </p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
