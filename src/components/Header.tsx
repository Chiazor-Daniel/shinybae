import React, { useState } from "react";
import { ShoppingBag, Search, User, Menu, Heart, X } from "lucide-react";
import { Product } from "../types";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onPageChange: (page: string) => void;
  currentPage: string;
  products?: Product[];
  onProductClick?: (product: Product) => void;
}

const Header: React.FC<HeaderProps> = ({
  cartCount,
  onCartClick,
  onPageChange,
  currentPage,
  products = [],
  onProductClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "shop", label: "Shop" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
  };

  const handleSearchClick = () => {
    setIsSearchOpen(true);
    setIsMobileMenuOpen(false);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const handleProductSelect = (product: Product) => {
    if (onProductClick) {
      onProductClick(product);
      handleSearchClose();
    }
  };

  // Filter products based on search query
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <header className="backdrop-blur-glass shadow-rose sticky top-0 z-40 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer group"
            onClick={() => onPageChange("home")}
          >
            <h1 className="text-3xl font-dancing font-bold text-gradient group-hover:scale-105 transition-transform duration-300">
              ShinyBae
            </h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`text-md font-medium font-inter transition-all duration-300 hover:scale-105 ${
                  currentPage === item.id
                    ? "text-rose-500 border-b-2 border-rose-500"
                    : "text-gray-700 hover:text-rose-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleSearchClick}
              className="p-2 text-gray-600 hover:text-rose-500 transition-all duration-300 hover:scale-110 rounded-full hover:bg-rose-50"
              aria-label="Search products"
            >
              <Search size={20} />
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-rose-500 transition-all duration-300 hover:scale-110 rounded-full hover:bg-rose-50 group"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-400 to-rose-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse group-hover:animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={handleMobileMenuToggle}
              className="md:hidden p-2 text-gray-600 hover:text-rose-500 transition-all duration-300 hover:scale-110 rounded-full hover:bg-rose-50"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-fade-in">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMobileNavClick(item.id)}
                  className={`block w-full text-left py-4 px-5 text-base font-medium font-inter transition-all duration-300 rounded-xl ${
                    currentPage === item.id
                      ? "text-rose-500 bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-rose-500 shadow-sm"
                      : "text-gray-700 hover:text-rose-500 hover:bg-rose-50 active:bg-rose-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile utility buttons */}
              <div className="border-t border-gray-200 pt-4 mt-3">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleSearchClick}
                    className="flex items-center justify-center space-x-2 py-4 px-4 text-gray-700 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all duration-300 font-medium border border-gray-100 active:bg-rose-100"
                  >
                    <Search size={18} />
                    <span>Search</span>
                  </button>
                  <button
                    onClick={() => {
                      onCartClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center space-x-2 py-4 px-4 text-gray-700 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all duration-300 relative font-medium border border-gray-100 active:bg-rose-100"
                  >
                    <ShoppingBag size={18} />
                    <span>Cart</span>
                    {cartCount > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-rose-400 to-rose-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-md animate-pulse">
                        {cartCount}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search Modal */}
        {isSearchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 animate-fade-in">
            {/* Backdrop */}
            <div className="absolute inset-0" onClick={handleSearchClose} />

            {/* Search Box */}
            <div className="relative z-10 w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center p-4 border-b border-gray-200">
                <Search className="text-gray-400 mr-3" size={24} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="flex-1 text-lg outline-none"
                  autoFocus
                />
                <button
                  onClick={handleSearchClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
                  aria-label="Close search"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {searchQuery.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <Search className="mx-auto mb-3 text-gray-300" size={48} />
                    <p>Start typing to search products...</p>
                  </div>
                ) : filteredProducts.length > 0 ? (
                  <div className="p-4 space-y-2">
                    {filteredProducts.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleProductSelect(product)}
                        className="w-full flex items-center space-x-4 p-4 hover:bg-rose-50 rounded-xl transition-all duration-200 text-left"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 truncate">
                            {product.name}
                          </h4>
                          <p className="text-sm text-gray-600 truncate">
                            {product.description}
                          </p>
                        </div>
                        <span className="text-lg font-bold text-rose-500">
                          ${product.price.toFixed(2)}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <div className="text-4xl mb-3">😕</div>
                    <p>No products found for "{searchQuery}"</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
