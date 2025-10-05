import React, { useState } from "react";
import { ShoppingBag, Filter, ChevronDown } from "lucide-react";
import { Product } from "../types";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
  onProductClick,
}) => {
  const [sortBy, setSortBy] = useState("best-selling");
  const [filterBy, setFilterBy] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Filter products
  const filteredProducts = products.filter((product) => {
    if (filterBy === "all") return true;
    if (filterBy === "new") return product.isNew;
    return product.category === filterBy;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return a.isNew ? -1 : 1;
      default:
        return 0;
    }
  });

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Glossy Collection
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-rose-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover all our handcrafted lip glosses designed to make you shine
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-rose-300 transition-colors"
            >
              <Filter size={16} />
              Filters
            </button>

            {showFilters && (
              <div className="flex gap-2 flex-wrap">
                {[
                  { value: "all", label: "All Products" },
                  { value: "new", label: "New" },
                  { value: "gloss", label: "Gloss" },
                  { value: "shimmer", label: "Shimmer" },
                  { value: "matte", label: "Matte" },
                ].map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setFilterBy(filter.value)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      filterBy === filter.value
                        ? "bg-rose-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-rose-100"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:border-rose-500"
            >
              <option value="best-selling">Best Selling</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown
              className="absolute right-2 top-3 text-gray-500"
              size={16}
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden shimmer-effect">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => onProductClick(product)}
                />
              </div>

              <div className="p-6">
                <h3
                  className="text-xl font-semibold text-gray-900 mb-2 cursor-pointer hover:text-rose-500 transition-colors"
                  onClick={() => onProductClick(product)}
                >
                  {product.name}
                </h3>
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-2">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-gradient-to-r from-rose-500 to-rose-500 text-white font-semibold py-3 rounded-full hover:from-rose-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <ShoppingBag className="mr-2" size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found matching your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
