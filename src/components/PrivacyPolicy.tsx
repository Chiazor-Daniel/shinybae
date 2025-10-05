import React from "react";
import { ArrowLeft, Shield, Lock, Eye, Users, Mail } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
            <Shield className="text-rose-500" size={32} />
            <h1 className="text-3xl font-playfair font-bold text-gray-900">
              Privacy Policy
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
              At ShinyBae, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website and make purchases through
              our Shopify-powered store.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Eye className="text-rose-500" size={24} />
              <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                Information We Collect
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Personal Information
                </h3>
                <p>
                  When you make a purchase, we collect information including:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (processed securely by Shopify)</li>
                  <li>Order history and preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Automatic Information
                </h3>
                <p>We automatically collect certain information including:</p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Browser type and device information</li>
                  <li>IP address and location data</li>
                  <li>Shopping behavior and preferences</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Users className="text-rose-500" size={24} />
              <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                How We Use Your Information
              </h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Respond to customer service requests</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our website and product offerings</li>
                <li>Prevent fraud and enhance security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Lock className="text-rose-500" size={24} />
              <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                Information Sharing
              </h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>We may share your information with:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong>Shopify:</strong> Our e-commerce platform provider who
                  processes payments and manages orders
                </li>
                <li>
                  <strong>Shipping carriers:</strong> To deliver your orders
                </li>
                <li>
                  <strong>Payment processors:</strong> To process your
                  transactions securely
                </li>
                <li>
                  <strong>Service providers:</strong> Who assist us in operating
                  our website and conducting business
                </li>
                <li>
                  <strong>Legal authorities:</strong> When required by law or to
                  protect our rights
                </li>
              </ul>
              <p className="mt-4 text-sm bg-rose-50 p-4 rounded-lg">
                <strong>Note:</strong> We never sell your personal information
                to third parties for their marketing purposes.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="text-rose-500" size={24} />
              <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                Data Security
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                We implement appropriate technical and organizational security
                measures to protect your personal information, including:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and encrypted databases</li>
                <li>PCI DSS compliant payment processing through Shopify</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information</li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                However, no method of transmission over the internet is 100%
                secure. While we strive to protect your information, we cannot
                guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <div className="flex items-center space-x-2 mb-4">
              <Users className="text-rose-500" size={24} />
              <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                Your Rights
              </h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your personal information</li>
                <li>Request data portability</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at{" "}
                <a
                  href={`mailto:${SITE_CONFIG.emails.privacy}`}
                  className="text-rose-500 hover:text-rose-600 font-semibold"
                >
                  {SITE_CONFIG.emails.privacy}
                </a>
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
              Cookies and Tracking
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>
                We use cookies and similar tracking technologies to enhance your
                experience. You can control cookies through your browser
                settings, but this may affect website functionality.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">Types of cookies we use:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Essential cookies (required for website functionality)
                  </li>
                  <li>Analytics cookies (to understand site usage)</li>
                  <li>Marketing cookies (for personalized advertising)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children. If
              you believe we have collected information from a child, please
              contact us immediately.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
              Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these sites. We encourage
              you to review their privacy policies.
            </p>
          </section>

          {/* International Users */}
          <section>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
              International Users
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place
              to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last updated" date. Continued use of our
              services after changes constitutes acceptance of the updated
              policy.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl">
            <div className="flex items-center space-x-2 mb-4">
              <Mail className="text-rose-500" size={24} />
              <h2 className="text-2xl font-playfair font-semibold text-gray-900">
                Contact Us
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${SITE_CONFIG.emails.privacy}`}
                  className="text-rose-500 hover:text-rose-600"
                >
                  {SITE_CONFIG.emails.privacy}
                </a>
              </p>
              <p>
                <strong>Email (General):</strong>{" "}
                <a
                  href={`mailto:${SITE_CONFIG.emails.general}`}
                  className="text-rose-500 hover:text-rose-600"
                >
                  {SITE_CONFIG.emails.general}
                </a>
              </p>
            </div>
          </section>

          {/* Shopify Notice */}
          <section className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700">
              <strong>Shopify Checkout:</strong> When you proceed to checkout,
              you will be redirected to Shopify's secure checkout platform.
              Please review{" "}
              <a
                href="https://www.shopify.com/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Shopify's Privacy Policy
              </a>{" "}
              for information about how they handle your payment and personal
              information.
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

export default PrivacyPolicy;
