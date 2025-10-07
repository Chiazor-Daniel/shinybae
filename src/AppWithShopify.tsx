import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandStory from "./components/BrandStory";
import FeaturedProducts from "./components/FeaturedProducts";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ProductGrid from "./components/ProductGrid";
import ProductDetail from "./components/ProductDetail";
import EnhancedCart from "./components/EnhancedCart";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import SEO from "./components/SEO";
import InstallPWA from "./components/InstallPWA";

import { useCart } from "./hooks/useCart";
import { ShopifyProvider, useShopify } from "./shopify/ShopifyProvider";
import { useShopifyProducts } from "./hooks/useShopifyProducts";
import { Product, Shade } from "./types";
import { RefreshCw } from "lucide-react";
import { SEO_CONFIG } from "./config/seo";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [useShopifyCheckout, setUseShopifyCheckout] = useState(
    import.meta.env.VITE_USE_SHOPIFY_CHECKOUT === "true" || true,
  );

  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
  } = useCart();

  const { isLoaded } = useShopify();

  // Use real Shopify products
  const {
    products,
    loading: productsLoading,
    error,
    refetch,
  } = useShopifyProducts();
  const displayProducts = products;

  // Selected product state - will be set from sessionStorage or products array
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Restore selected product when products are loaded or on page refresh
  React.useEffect(() => {
    if (location.pathname === "/product" && displayProducts.length > 0) {
      const stored = sessionStorage.getItem("selectedProduct");
      if (stored) {
        try {
          const storedProduct = JSON.parse(stored);
          // Find the product in the current products array to ensure it exists
          const foundProduct = displayProducts.find(
            (p) => p.id === storedProduct.id,
          );
          if (foundProduct) {
            setSelectedProduct(foundProduct);
          } else {
            // Product not found, redirect to shop
            sessionStorage.removeItem("selectedProduct");
            navigate("/shop");
          }
        } catch (e) {
          sessionStorage.removeItem("selectedProduct");
          navigate("/shop");
        }
      } else if (!selectedProduct) {
        // No stored product and no selected product, redirect to shop
        navigate("/shop");
      }
    }
  }, [location.pathname, displayProducts, navigate]);

  // Debug logging
  console.log("🔍 Debug Info:", {
    storeDomain: import.meta.env.VITE_SHOPIFY_STORE_DOMAIN,
    hasToken: !!import.meta.env.VITE_SHOPIFY_PUBLIC_ACCESS_TOKEN,
    productsLoading,
    error,
    shopifyProductsCount: products.length,
    displayProductsCount: displayProducts.length,
    firstProduct: displayProducts[0]?.name,
  });

  const handleAddToCart = (product: Product, shade?: Shade, quantity = 1) => {
    // Create a default shade if product has no shades
    const defaultShade = {
      id: "default",
      name: "Default",
      color: "#FFB6C1",
      image: product.image,
    };

    const selectedShade = shade || product.shades[0] || defaultShade;

    // Always use local cart - Shopify integration happens at checkout
    addToCart(product, selectedShade, quantity);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    // Save to sessionStorage so it persists on refresh
    sessionStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate("/product");
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    if (useShopifyCheckout) {
      // Shopify checkout will handle the redirect automatically
      return;
    }
    navigate("/checkout");
  };

  const handleOrderComplete = () => {
    clearCart();
    navigate("/confirmation");
  };

  const handleContinueShopping = () => {
    navigate("/");
  };

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path === "/shop") return "shop";
    if (path === "/about") return "about";
    if (path === "/product") return "product";
    if (path === "/checkout") return "checkout";
    if (path === "/confirmation") return "confirmation";
    if (path === "/privacy") return "privacy";
    if (path === "/terms") return "terms";
    return "home";
  };

  // Remove global error handler

  // Show loading state
  if (productsLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <TopBar />
        <Header
          cartCount={getCartCount()}
          onCartClick={() => setIsCartOpen(true)}
          onPageChange={(page) => navigate(page === "home" ? "/" : `/${page}`)}
          currentPage={getCurrentPage()}
        />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-rose-50 to-white">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-rose-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading products...</p>
          </div>
        </div>
      </div>
    );
  }

  const currentPage = getCurrentPage();
  const showFooter =
    currentPage !== "checkout" &&
    currentPage !== "confirmation" &&
    currentPage !== "privacy" &&
    currentPage !== "terms";

  return (
    <div className="min-h-screen bg-white">
      <InstallPWA />
      <TopBar />
      <Header
        cartCount={getCartCount()}
        onCartClick={() => setIsCartOpen(true)}
        onPageChange={(page) => navigate(page === "home" ? "/" : `/${page}`)}
        currentPage={currentPage}
        products={displayProducts}
        onProductClick={handleProductClick}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SEO
                title={SEO_CONFIG.pages.home.title}
                description={SEO_CONFIG.pages.home.description}
                url={`${SEO_CONFIG.site.url}/`}
              />
              <Hero onShopClick={() => navigate("/shop")} />
              <BrandStory />
              {error ? (
                <div className="py-20 text-center">
                  <div className="mb-6">
                    <p className="text-gray-500 text-lg mb-4">
                      No products available
                    </p>
                    <button
                      onClick={() => refetch()}
                      className="btn-primary px-6 py-2 text-sm"
                    >
                      <RefreshCw className="mr-2 inline-block" size={16} />
                      Try Again
                    </button>
                  </div>
                </div>
              ) : displayProducts.length > 0 ? (
                <FeaturedProducts
                  products={displayProducts}
                  onAddToCart={handleAddToCart}
                  onProductClick={handleProductClick}
                />
              ) : (
                <div className="py-20 text-center">
                  <p className="text-gray-500 text-lg">
                    No products available at the moment.
                  </p>
                </div>
              )}
              <Newsletter />
            </>
          }
        />
        <Route
          path="/shop"
          element={
            <>
              <SEO
                title={SEO_CONFIG.pages.shop.title}
                description={SEO_CONFIG.pages.shop.description}
                url={`${SEO_CONFIG.site.url}/shop`}
              />
              {error ? (
                <div className="min-h-screen flex items-center justify-center bg-white">
                  <div className="text-center p-8">
                    <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                      No Products Available
                    </h2>
                    <button
                      onClick={() => refetch()}
                      className="btn-primary px-6 py-3"
                    >
                      <RefreshCw className="mr-2 inline-block" size={18} />
                      Try Again
                    </button>
                  </div>
                </div>
              ) : displayProducts.length > 0 ? (
                <ProductGrid
                  products={displayProducts}
                  onAddToCart={handleAddToCart}
                  onProductClick={handleProductClick}
                />
              ) : (
                <div className="min-h-screen flex items-center justify-center bg-white">
                  <div className="text-center p-8">
                    <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                      No Products Available
                    </h2>
                    <p className="text-gray-600 mb-6">
                      We're currently updating our collection. Please check back
                      soon!
                    </p>
                    <button
                      onClick={() => navigate("/")}
                      className="btn-primary px-6 py-3"
                    >
                      Back to Home
                    </button>
                  </div>
                </div>
              )}
            </>
          }
        />
        <Route
          path="/product"
          element={
            selectedProduct ? (
              <>
                <SEO
                  title={`${selectedProduct.name} | ShinyBae`}
                  description={selectedProduct.description}
                  image={selectedProduct.image}
                  url={`${SEO_CONFIG.site.url}/product`}
                  type="product"
                />
                <ProductDetail
                  product={selectedProduct}
                  onBack={() => {
                    sessionStorage.removeItem("selectedProduct");
                    navigate("/shop");
                  }}
                  onAddToCart={addToCart}
                />
              </>
            ) : (
              <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-rose-50 to-white">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🔍</div>
                  <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
                    Product Not Found
                  </h2>
                  <p className="text-gray-600 mb-6">
                    The product you're looking for doesn't exist or has been
                    removed.
                  </p>
                  <button
                    onClick={() => navigate("/shop")}
                    className="btn-primary px-6 py-3"
                  >
                    Browse All Products
                  </button>
                </div>
              </div>
            )
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              items={cartItems}
              total={getCartTotal()}
              onBack={() => setIsCartOpen(true)}
              onComplete={handleOrderComplete}
            />
          }
        />
        <Route
          path="/confirmation"
          element={<OrderConfirmation onContinue={handleContinueShopping} />}
        />
        <Route
          path="/about"
          element={
            <>
              <SEO
                title={SEO_CONFIG.pages.about.title}
                description={SEO_CONFIG.pages.about.description}
                url={`${SEO_CONFIG.site.url}/about`}
              />
              <BrandStory />
            </>
          }
        />
        <Route
          path="/privacy"
          element={
            <>
              <SEO
                title={SEO_CONFIG.pages.privacy.title}
                description={SEO_CONFIG.pages.privacy.description}
                url={`${SEO_CONFIG.site.url}/privacy`}
              />
              <PrivacyPolicy onBack={() => navigate("/")} />
            </>
          }
        />
        <Route
          path="/terms"
          element={
            <>
              <SEO
                title={SEO_CONFIG.pages.terms.title}
                description={SEO_CONFIG.pages.terms.description}
                url={`${SEO_CONFIG.site.url}/terms`}
              />
              <TermsConditions onBack={() => navigate("/")} />
            </>
          }
        />
      </Routes>

      {showFooter && <Footer onPageChange={(page) => navigate(`/${page}`)} />}

      <EnhancedCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        total={getCartTotal()}
        onCheckout={handleCheckout}
        useShopifyCheckout={useShopifyCheckout}
      />
    </div>
  );
}

function AppWithShopify() {
  return (
    <ShopifyProvider>
      <AppContent />
    </ShopifyProvider>
  );
}

export default AppWithShopify;
