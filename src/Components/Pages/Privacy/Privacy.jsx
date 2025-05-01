import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-4">
          At Mystery Quest, we value your privacy and are committed to
          protecting your personal information. This Privacy Policy explains how
          we collect, use, and safeguard your data.
        </p>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 mb-4">
            We may collect personal information such as your name, email
            address, and usage data when you interact with our website.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-4">
            Your information is used to improve our services, personalize your
            experience, and communicate with you.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
            3. Data Security
          </h2>
          <p className="text-gray-700 mb-4">
            We implement security measures to protect your data from
            unauthorized access or disclosure.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
            4. Cookies
          </h2>
          <p className="text-gray-700 mb-4">
            We use cookies to enhance your experience. You can disable cookies
            in your browser settings.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
            5. Changes to This Policy
          </h2>
          <p className="text-gray-700 mb-4">
            We may update this policy periodically. Please review it regularly.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
