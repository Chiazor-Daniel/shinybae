import React from "react";
import { Check, Package, Truck, Mail } from "lucide-react";

interface OrderConfirmationProps {
  onContinue: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  onContinue,
}) => {
  const orderNumber = "SB" + Date.now().toString().slice(-6);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-green-500" size={32} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Order Confirmed!
          </h1>

          <p className="text-xl text-gray-700 mb-2">
            Thank you for your order!
          </p>

          <p className="text-gray-600 mb-8">Order #{orderNumber}</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center text-gray-600">
              <Mail className="mr-3 text-rose-500" size={20} />
              <span>Confirmation email sent</span>
            </div>
            <div className="flex items-center justify-center text-gray-600">
              <Package className="mr-3 text-rose-500" size={20} />
              <span>Processing your order</span>
            </div>
            <div className="flex items-center justify-center text-gray-600">
              <Truck className="mr-3 text-rose-500" size={20} />
              <span>Ships within 1-2 business days</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-rose-50 to-rose-50 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">What's Next?</h3>
            <p className="text-sm text-gray-700">
              We'll send you tracking information once your glossy goodies ship.
              Get ready to shine! ✨
            </p>
          </div>

          <button
            onClick={onContinue}
            className="w-full bg-gradient-to-r from-rose-500 to-rose-500 text-white font-semibold py-4 rounded-full hover:from-rose-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
