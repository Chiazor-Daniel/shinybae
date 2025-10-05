import React from "react";
import { ShoppingBag } from "lucide-react";
import { Product } from "../types";

interface FeaturedProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  onAddToCart,
  onProductClick,
}) => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="py-24 bg-gradient-to-b from-rose-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6 text-shadow">
            Shop Our Faves
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-rose-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-inter leading-relaxed">
            Discover our best-selling glosses that our community can't stop
            raving about
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-retro overflow-hidden card-hover animate-fade-in"
              style={{
                animationDelay: `${featuredProducts.indexOf(product) * 0.2}s`,
              }}
            >
              <div className="relative overflow-hidden shimmer-effect">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() => onProductClick(product)}
                />
              </div>

              <div className="p-8">
                <h3
                  className="text-2xl font-playfair font-semibold text-gray-900 mb-3 cursor-pointer hover:text-rose-500 transition-colors"
                  onClick={() => onProductClick(product)}
                >
                  {product.name}
                </h3>
                <div className="flex items-center mb-6">
                  <span className="text-3xl font-playfair font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through ml-3">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onAddToCart(product)}
                  className="btn-primary w-full flex items-center justify-center text-lg group"
                >
                  <ShoppingBag
                    className="mr-3 group-hover:animate-bounce"
                    size={18}
                  />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
