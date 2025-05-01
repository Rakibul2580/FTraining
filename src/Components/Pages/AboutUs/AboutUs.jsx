import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to Mystery Quest, where every puzzle is a new adventure! Our
          mission is to challenge your mind and spark your curiosity with
          exciting riddles and mysteries.
        </p>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
            Our Story
          </h2>
          <p className="text-gray-700 mb-4">
            Founded in 2023, Mystery Quest was created by a team of puzzle
            enthusiasts who wanted to share their love for brain teasers with
            the world.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
            Our Team
          </h2>
          <p className="text-gray-700 mb-4">
            We are a diverse group of developers, designers, and puzzle creators
            dedicated to delivering the best experience for our users.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
            Our Vision
          </h2>
          <p className="text-gray-700 mb-4">
            To create a global community of puzzle solvers who enjoy the thrill
            of solving mysteries.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
