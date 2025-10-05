import React from "react";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { CartItem } from "../types";

// NOTE: The CartProps and CartItem types are assumed to remain the same
// to match the original application structure, requiring productId and shadeId.

interface CartProps {
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
}

const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  total,
  onCheckout,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Cart Drawer */}
      <div
        className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform" /* Simplified transition for brevity */
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <ShoppingBag className="mr-2" size={20} />
              Your Cart ({items.length})
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="mx-auto mb-4 text-gray-300" size={48} />
                <p className="text-gray-500 text-lg mb-2">Your cart is empty</p>
                <p className="text-gray-400">Add some glossy goodness! 💄</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => {
                  // Fallback for single-product data structure
                  // We assume if item.shade is missing, we use the product's top-level properties.
                  const displayColor = item.shade?.color || item.product.color;
                  const shadeName = item.shade?.name || item.product.name;
                  const shadeId = item.shade?.id || item.product.id; // Use product.id as a fallback for shadeId

                  return (
                    <div
                      key={`${item.product.id}-${shadeId}`}
                      className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {item.product.name}
                        </h3>
                        <div className="flex items-center mt-1">
                          <div
                            className="w-4 h-4 rounded-full border border-gray-300 mr-2"
                            style={{ backgroundColor: displayColor }} // Use fallback color
                          />
                          <span className="text-sm text-gray-600">
                            {shadeName} {/* Use fallback name */}
                          </span>
                        </div>
                        <p className="text-lg font-bold text-gray-900 mt-1">
                          ${item.product.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {/* Quantity Decrease */}
                        <button
                          onClick={() =>
                            onUpdateQuantity(
                              item.product.id,
                              shadeId,
                              item.quantity - 1,
                            )
                          }
                          className="p-1 text-gray-400 hover:text-rose-500 transition-colors"
                          disabled={item.quantity <= 1} // Disable button if quantity is 1
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        {/* Quantity Increase */}
                        <button
                          onClick={() =>
                            onUpdateQuantity(
                              item.product.id,
                              shadeId,
                              item.quantity + 1,
                            )
                          }
                          className="p-1 text-gray-400 hover:text-rose-500 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                        {/* Remove Item */}
                        <button
                          onClick={() => onRemoveItem(item.product.id, shadeId)}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors ml-2"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-900">
                  Total:
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  ${total.toFixed(2)}
                </span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full bg-gradient-to-r from-rose-500 to-rose-500 text-white font-semibold py-4 rounded-full hover:from-rose-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105"
              >
                Checkout
              </button>
              <p className="text-center text-sm text-gray-500 mt-3">
                Free shipping on orders over $35 🚚
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
