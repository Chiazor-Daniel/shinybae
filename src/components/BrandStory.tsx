import React from "react";
import { Heart, Star, Users } from "lucide-react";

const BrandStory: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6 text-shadow">
            Where It All Started
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-rose-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter leading-relaxed">
            Born from a passion for clean beauty and self-expression, ShinyBae
            began in a small kitchen with a big dream: to create lip glosses
            that don't just look beautiful, but make you feel unstoppable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center mb-24 animate-slide-up">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-retro group">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-200/50 to-rose-500/20 z-10"></div>
            <img
              src="show.png"
              alt="Beautiful woman with glossy lips showcasing ShinyBae cosmetics"
              className="w-full h-full object-cover scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
          </div>
          <div>
            <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-8 text-shadow">
              Handcrafted with Love
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed font-inter text-lg">
              Every ShinyBae gloss is carefully crafted in small batches using
              only the finest ingredients. We believe that what you put on your
              lips matters, which is why we use nourishing oils, vitamins, and
              natural extracts that keep your lips healthy and hydrated.
            </p>
            <p className="text-gray-700 leading-relaxed font-inter text-lg">
              From our signature moisturizing formula to our carefully curated
              shade palette, each product is designed to enhance your natural
              beauty and boost your confidence.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="relative bg-gradient-to-br from-rose-50 via-rose-50 to-rose-50 rounded-3xl p-16 text-center overflow-hidden animate-fade-in">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-xs"></div>
          <div className="relative">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-400 rounded-full mb-8 animate-pulse-soft">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-6 text-shadow">
              Our Mission
            </h3>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-playfair italic leading-relaxed">
              "To empower every person to shine with confidence, one glossy lip
              at a time. Because when you feel beautiful, you are unstoppable."
            </p>
          </div>
        </div>

        {/* Stats */}
        {/*<div className="grid md:grid-cols-3 gap-12 mt-20">
          <div className="text-center group animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-rose-100 to-rose-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-rose">
            <Star className="text-rose-500 group-hover:animate-spin" size={28} />
            </div>
            <h4 className="text-3xl font-playfair font-bold text-gray-900 mb-3">10,000+</h4>
            <p className="text-gray-600 font-inter">Happy Customers</p>
          </div>
          <div className="text-center group animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-br from-rose-100 to-rose-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-rose">
            <Heart className="text-rose-500 group-hover:animate-pulse" size={28} />
            </div>
            <h4 className="text-3xl font-playfair font-bold text-gray-900 mb-3">100%</h4>
            <p className="text-gray-600 font-inter">Natural Ingredients</p>
          </div>
          <div className="text-center group animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-gradient-to-br from-rose-100 to-rose-100 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-rose">
            <Users className="text-rose-500 group-hover:animate-bounce" size={28} />
            </div>
            <h4 className="text-3xl font-playfair font-bold text-gray-900 mb-3">50k+</h4>
            <p className="text-gray-600 font-inter">Social Followers</p>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default BrandStory;
