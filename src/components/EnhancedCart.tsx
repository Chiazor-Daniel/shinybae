import React from "react";
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { CartItem } from "../types";
import { useShopify } from "../shopify/ShopifyProvider";

interface EnhancedCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (
    productId: string,
    shadeId: string,
    quantity: number,
  ) => void;
  onRemoveItem: (productId: string, shadeId: string) => void;
  total: number;
  onCheckout: () => void;
  useShopifyCheckout?: boolean;
}

const EnhancedCart: React.FC<EnhancedCartProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  total,
  onCheckout,
  useShopifyCheckout = false,
}) => {
  const handleCheckoutClick = async () => {
    if (useShopifyCheckout) {
      // Build cart line items for Shopify
      const lineItems = items
        .map((item) => {
          // Use product ID as variant ID (you'll need to map these to real Shopify variant IDs)
          return `${item.product.id}:${item.quantity}`;
        })
        .join(",");

      // Open Shopify checkout in new tab
      window.open(
        `https://dzfymv-7p.myshopify.com/cart/${lineItems}`,
        "_blank",
      );
    } else {
      // Use your existing checkout flow
      onCheckout();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-playfair font-semibold text-gray-900">
              Your Cart ({items.length})
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={64} className="text-gray-300 mb-4" />
                <h3 className="text-xl font-playfair font-semibold text-gray-700 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-gray-500 mb-6">
                  Add some beautiful glosses to get started!
                </p>
                <button onClick={onClose} className="btn-secondary">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.shade?.id || "default"}`}
                    className="flex items-center space-x-4 p-4 bg-rose-50 rounded-2xl hover:bg-rose-100 transition-colors duration-200"
                  >
                    <img
                      src={item.shade?.image || item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-xl shadow-sm"
                    />

                    <div className="flex-1">
                      <h3 className="font-playfair font-semibold text-gray-900 mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.shade?.name || "Default"}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() =>
                              onUpdateQuantity(
                                item.product.id,
                                item.shade?.id || "default",
                                item.quantity - 1,
                              )
                            }
                            className="p-1 hover:bg-rose-200 rounded-full transition-colors duration-200"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={16} className="text-gray-600" />
                          </button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQuantity(
                                item.product.id,
                                item.shade?.id || "default",
                                item.quantity + 1,
                              )
                            }
                            className="p-1 hover:bg-rose-200 rounded-full transition-colors duration-200"
                          >
                            <Plus size={16} className="text-gray-600" />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-playfair font-bold text-gray-900">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        onRemoveItem(
                          item.product.id,
                          item.shade?.id || "default",
                        )
                      }
                      className="p-2 hover:bg-rose-200 rounded-full transition-colors duration-200"
                    >
                      <X size={16} className="text-gray-600" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-gradient-to-r from-rose-50 to-rose-100">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-playfair font-semibold text-gray-900">
                  Total:
                </span>
                <span className="text-2xl font-playfair font-bold text-gray-900">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/*{useShopifyCheckout && (
                <div className="mb-4 p-3 bg-rose-100 rounded-lg">
                  <p className="text-sm text-rose-700 font-medium">
                    🔒 Secure Shopify Checkout
                  </p>
                  <p className="text-xs text-rose-600">
                    You'll be redirected to our secure payment page
                  </p>
                </div>
              )}*/}

              <button
                onClick={handleCheckoutClick}
                className="btn-primary w-full flex items-center justify-center text-lg group"
              >
                {useShopifyCheckout ? (
                  <>
                    <ShoppingBag
                      className="mr-3 group-hover:animate-bounce"
                      size={20}
                    />
                    Checkout
                    <ArrowRight
                      className="ml-3 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </>
                ) : (
                  <>
                    <ShoppingBag
                      className="mr-3 group-hover:animate-bounce"
                      size={20}
                    />
                    Proceed to Checkout
                    <ArrowRight
                      className="ml-3 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                className="w-full mt-3 text-center text-gray-600 hover:text-rose-500 transition-colors duration-200 font-medium"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EnhancedCart;
