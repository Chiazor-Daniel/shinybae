import React, { useState } from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandStory from "./components/BrandStory";
import FeaturedProducts from "./components/FeaturedProducts";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ProductGrid from "./components/ProductGrid";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";

import { useCart } from "./hooks/useCart";
import { products } from "./data/products";
import { Product, Shade } from "./types";

type Page =
  | "home"
  | "shop"
  | "blog"
  | "about"
  | "product"
  | "checkout"
  | "confirmation";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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

  const handleAddToCart = (product: Product, shade?: Shade, quantity = 1) => {
    const selectedShade = shade || product.shades[0];
    addToCart(product, selectedShade, quantity);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage("product");
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentPage("checkout");
  };

  const handleOrderComplete = () => {
    clearCart();
    setCurrentPage("confirmation");
  };

  const handleContinueShopping = () => {
    setCurrentPage("home");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero onShopClick={() => setCurrentPage("shop")} />
            <BrandStory />
            <FeaturedProducts
              products={products}
              onAddToCart={handleAddToCart}
              onProductClick={handleProductClick}
            />
            <Newsletter />
          </>
        );
      case "shop":
        return (
          <ProductGrid
            products={products}
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
          />
        );
      case "product":
        return selectedProduct ? (
          <ProductDetail
            product={selectedProduct}
            onBack={() => setCurrentPage("shop")}
            onAddToCart={addToCart}
          />
        ) : null;
      case "checkout":
        return (
          <Checkout
            items={cartItems}
            total={getCartTotal()}
            onBack={() => setIsCartOpen(true)}
            onComplete={handleOrderComplete}
          />
        );
      case "confirmation":
        return <OrderConfirmation onContinue={handleContinueShopping} />;
      case "about":
        return <BrandStory />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header
        cartCount={getCartCount()}
        onCartClick={() => setIsCartOpen(true)}
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />

      {renderPage()}

      {currentPage !== "checkout" && currentPage !== "confirmation" && (
        <Footer />
      )}

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        total={getCartTotal()}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;
