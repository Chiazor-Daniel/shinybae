import React from "react";
import {
  ArrowLeft,
  FileText,
  AlertCircle,
  Scale,
  ShoppingCart,
  CreditCard,
  Package,
} from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface TermsConditionsProps {
  onBack: () => void;
}

const TermsConditions: React.FC<TermsConditionsProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-rose-500 transition-colors mb-4"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Shop
          </button>
          <div className="flex items-center space-x-3">
            <FileText className="text-rose-500" size={32} />
            <h1 className="text-3xl font-playfair font-bold text-gray-900">
              Terms & Conditions
            </h1>
          </div>
          <p className="text-gray-600 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              Welcome to ShinyBae! These Terms and Conditions govern your use of
              our website and the purchase of our products. By accessing our
              website and placing an order, you agree to be bound by these
              terms. Please read them carefully.
            </p>
          </section>

          {/* Agreement to Terms */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="text-rose-500" size={24} />
              <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                Agreement to Terms
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                By using our website, you represent that you are at least 18
                years old or have reached the age of majority in your
                jurisdiction. If you are under 18, you may only use our website
                with the involvement of a parent or guardian.
              </p>
              <p>
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting. Your continued use
                of the website after changes constitutes acceptance of the
                modified terms.
              </p>
            </div>
          </section>

          {/* Products and Pricing */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingCart className="text-rose-500" size={24} />
              <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                Products and Pricing
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                All products, descriptions, prices, and availability are subject
                to change without notice. We make every effort to display
                product colors and images as accurately as possible, but we
                cannot guarantee that your device's display will accurately
                reflect the actual product color.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Pricing includes:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>All applicable taxes (where required by law)</li>
                  <li>Shipping costs (calculated at checkout)</li>
                  <li>Prices are displayed in USD</li>
                </ul>
              </div>
              <p>
                We reserve the right to limit quantities purchased per person,
                household, or order. We may refuse or cancel any order at our
                discretion.
              </p>
            </div>
          </section>

          {/* Orders and Payment */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <CreditCard className="text-rose-500" size={24} />
              <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                Orders and Payment
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                When you place an order, you will receive an email confirmation.
                This does not constitute acceptance of your order. We reserve
                the right to accept or decline your order for any reason.
              </p>
              <div>
                <p className="font-semibold mb-2">Payment Terms:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Payment is processed securely through Shopify</li>
                  <li>
                    We accept major credit cards, debit cards, and other payment
                    methods as displayed at checkout
                  </li>
                  <li>
                    Payment must be received in full before order shipment
                  </li>
                  <li>All transactions are secure and encrypted</li>
                  <li>
                    You are responsible for all charges incurred under your
                    account
                  </li>
                </ul>
              </div>
              <p className="text-sm bg-blue-50 p-4 rounded-lg">
                <strong>Note:</strong> Our checkout is powered by Shopify. By
                proceeding to checkout, you also agree to Shopify's Terms of
                Service.
              </p>
            </div>
          </section>

          {/* Shipping and Delivery */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Package className="text-rose-500" size={24} />
              <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                Shipping and Delivery
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                We ship to addresses within the United States and select
                international locations. Shipping costs and delivery times vary
                based on your location and selected shipping method.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Delivery Timeline:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Orders are processed within 1-3 business days</li>
                  <li>Standard shipping: 5-7 business days</li>
                  <li>Expedited shipping: 2-3 business days</li>
                  <li>International shipping: 10-21 business days</li>
                </ul>
              </div>
              <p>
                We are not responsible for delays caused by shipping carriers,
                customs, or circumstances beyond our control. Risk of loss
                passes to you upon delivery to the carrier.
              </p>
              <p className="font-semibold">Free Shipping:</p>
              <p>
                Free standard shipping is available on orders over $70 within
                the continental United States.
              </p>
            </div>
          </section>

          {/* Returns and Refunds */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <AlertCircle className="text-rose-500" size={24} />
              <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                Returns and Refunds
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                We want you to love your ShinyBae products! If you're not
                completely satisfied, we accept returns within 30 days of
                delivery.
              </p>
              <div>
                <p className="font-semibold mb-2">Return Policy:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    Products must be unused, unopened, and in original packaging
                  </li>
                  <li>Products must be returned within 30 days of delivery</li>
                  <li>
                    Return shipping costs are the responsibility of the customer
                    unless the product is defective
                  </li>
                  <li>
                    Refunds will be processed within 5-10 business days after we
                    receive your return
                  </li>
                  <li>Original shipping costs are non-refundable</li>
                </ul>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg border border-rose-200">
                <p className="font-semibold text-rose-900 mb-2">
                  Non-Returnable Items:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-rose-800">
                  <li>
                    Opened or used cosmetic products (for hygiene reasons)
                  </li>
                  <li>Sale or clearance items</li>
                  <li>Gift cards</li>
                </ul>
              </div>
              <p>
                To initiate a return, please contact us at{" "}
                <a
                  href={`mailto:${SITE_CONFIG.emails.returns}`}
                  className="text-rose-500 hover:text-rose-600 font-semibold"
                >
                  {SITE_CONFIG.emails.returns}
                </a>{" "}
                with your order number.
              </p>
            </div>
          </section>

          {/* Product Usage and Safety */}
          <section>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
              Product Usage and Safety
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                Our products are formulated for cosmetic use only. Please read
                all product labels and follow usage instructions.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="font-semibold text-yellow-900 mb-2">
                  Important Safety Information:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-yellow-800">
                  <li>Discontinue use if irritation occurs</li>
                  <li>Keep out of reach of children</li>
                  <li>For external use only</li>
                  <li>Avoid contact with eyes</li>
                  <li>Check ingredient lists for allergens</li>
                </ul>
              </div>
              <p>
                We are not responsible for allergic reactions or adverse effects
                from product use. If you have sensitive skin or allergies,
                please review the ingredient list carefully before purchase.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
              Intellectual Property
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                All content on this website, including but not limited to text,
                graphics, logos, images, and software, is the property of
                ShinyBae and is protected by copyright and trademark laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative
                works from any content without our express written permission.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
              Limitation of Liability
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                To the fullest extent permitted by law, ShinyBae shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising from your use of our website or
                products.
              </p>
              <p>
                Our total liability to you for any claims arising from your use
                of our website or products shall not exceed the amount you paid
                for the products.
              </p>
            </div>
          </section>

          {/* Privacy */}
          <section>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
              Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Please review our{" "}
              <button
                onClick={() => window.history.back()}
                className="text-rose-500 hover:text-rose-600 font-semibold underline"
              >
                Privacy Policy
              </button>{" "}
              to understand how we collect, use, and protect your personal
              information.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
              Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions are governed by and construed in
              accordance with the laws of the United States. Any disputes
              arising from these terms shall be resolved in the appropriate
              courts.
            </p>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
              Severability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms and Conditions is found to be
              invalid or unenforceable, the remaining provisions shall continue
              in full force and effect.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="text-rose-500" size={24} />
              <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                Questions About Our Terms?
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please
              contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${SITE_CONFIG.emails.legal}`}
                  className="text-rose-500 hover:text-rose-600"
                >
                  {SITE_CONFIG.emails.legal}
                </a>
              </p>
              <p>
                <strong>General Inquiries:</strong>{" "}
                <a
                  href={`mailto:${SITE_CONFIG.emails.general}`}
                  className="text-rose-500 hover:text-rose-600"
                >
                  {SITE_CONFIG.emails.general}
                </a>
              </p>
            </div>
          </section>

          {/* Acceptance */}
          <section className="bg-gray-50 p-6 rounded-xl border-l-4 border-rose-500">
            <p className="text-gray-700 leading-relaxed">
              <strong>
                By using our website and placing an order, you acknowledge that
                you have read, understood, and agree to be bound by these Terms
                and Conditions.
              </strong>
            </p>
          </section>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button onClick={onBack} className="btn-primary px-8 py-3">
            Back to Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
