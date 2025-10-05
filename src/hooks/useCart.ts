import { useState, useEffect } from "react";
import { CartItem, Product, Shade } from "../types";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("shinybae-cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("shinybae-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, shade: Shade, quantity = 1) => {
    const shadeId = shade?.id || "default";
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) =>
          item.product.id === product.id &&
          (item.shade?.id || "default") === shadeId,
      );

      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id &&
          (item.shade?.id || "default") === shadeId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...prev, { product, shade, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, shadeId: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            (item.shade?.id || "default") === shadeId
          ),
      ),
    );
  };

  const updateQuantity = (
    productId: string,
    shadeId: string,
    quantity: number,
  ) => {
    if (quantity <= 0) {
      removeFromCart(productId, shadeId);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId &&
        (item.shade?.id || "default") === shadeId
          ? { ...item, quantity }
          : item,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
  };
};
