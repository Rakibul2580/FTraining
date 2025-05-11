import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Mystery Quest</h3>
            <p className="text-gray-400">
              SkyCrew is a platform for puzzle enthusiasts to solve exciting
              riddles and unlock hidden secrets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link to="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/puzzles" className="hover:text-blue-600">
                  Puzzles
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about-us" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact-us" className="hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/privacy-policy"
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  Privacy Policy
                </Link>
              </li>{" "}
              <li className="mb-2">
                <Link
                  to="/terms-of-service"
                  className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Email: support@mysteryquest.com</li>
              <li className="mb-2">Phone: +123 456 7890</li>
              <li className="mb-2">Address: 123 Puzzle Street, Brain City</li>
            </ul>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Mystery Quest. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
