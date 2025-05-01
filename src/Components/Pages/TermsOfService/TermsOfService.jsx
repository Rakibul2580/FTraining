import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-700 mb-4">
          Welcome to Mystery Quest! By using our website, you agree to comply
          with and be bound by the following terms and conditions.
        </p>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 mb-4">
            By accessing or using our website, you agree to these Terms of
            Service.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
            2. User Responsibilities
          </h2>
          <p className="text-gray-700 mb-4">
            You are responsible for maintaining the confidentiality of your
            account and for all activities that occur under your account.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
            3. Intellectual Property
          </h2>
          <p className="text-gray-700 mb-4">
            All content on this website is the property of Mystery Quest and is
            protected by copyright laws.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
            4. Limitation of Liability
          </h2>
          <p className="text-gray-700 mb-4">
            Mystery Quest is not liable for any damages arising from your use of
            this website.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
            5. Governing Law
          </h2>
          <p className="text-gray-700 mb-4">
            These terms are governed by the laws of [Your Country/Region].
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TermsOfService;
