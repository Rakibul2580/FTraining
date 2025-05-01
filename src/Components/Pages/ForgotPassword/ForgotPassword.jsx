import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams(); // Get token from URL (e.g., /forgot-password/:token)

  const isResetForm = !!token; // Show reset form if token is present

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    const url = isResetForm
      ? "https://ftraining-18rregde7-rakibul2580s-projects.vercel.app/reset-password"
      : "https://ftraining-18rregde7-rakibul2580s-projects.vercel.app/forgot-password";
    const data = isResetForm ? { token, newPassword } : { email };

    try {
      const response = await axios.post(url, data);
      setSuccess(response.data.message);
      if (isResetForm) {
        setTimeout(() => navigate("/signup"), 2000); // Redirect to login after reset
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, rotate: 2 },
    tap: { scale: 0.95 },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: "#f59e0b",
      transition: { duration: 0.3 },
    },
  };

  const planeVariants = {
    initial: { x: "-10vw", y: 0, rotate: 0 },
    animate: {
      x: "110vw",
      y: [0, 50, 0],
      rotate: [0, 5, 0],
      transition: { duration: 10, repeat: Infinity, ease: "linear" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Main Container */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Form Card */}
        <motion.div
          className="bg-white p-6 rounded-3xl rounded-bl-none shadow-lg w-full max-w-sm border border-amber-400"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {/* Logo Section */}
          <div className="bg-white p-4 rounded-t-lg flex items-center justify-center border-b border-amber-400">
            <h1 className="text-3xl font-bold text-green-900">
              PILOT <span className="text-amber-400">TRAINING</span>
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center text-amber-400">
              {isResetForm ? "Reset Password" : "Forgot Password"}
            </h2>
            <AnimatePresence>
              {!isResetForm ? (
                <motion.div
                  className="mb-4"
                  variants={inputVariants}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <label className="block text-green-900 mb-1" htmlFor="email">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 text-green-900"
                    required
                    aria-label="Email address"
                    whileFocus="focus"
                  />
                </motion.div>
              ) : (
                <motion.div
                  className="mb-4"
                  variants={inputVariants}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <label
                    className="block text-green-900 mb-1"
                    htmlFor="newPassword"
                  >
                    New Password
                  </label>
                  <motion.input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 text-green-900"
                    required
                    aria-label="New password"
                    whileFocus="focus"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {error && (
                <motion.p
                  className="text-red-600 text-sm mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {error}
                </motion.p>
              )}
              {success && (
                <motion.p
                  className="text-green-900 text-sm mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {success}
                </motion.p>
              )}
            </AnimatePresence>
            <motion.button
              type="submit"
              className="w-full bg-amber-400 text-green-900 p-2 rounded-br-none rounded-full hover:bg-[#e6c200] transition-colors flex items-center justify-center"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              disabled={isLoading}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-green-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Submit"
              )}
            </motion.button>
            <div className="mt-4 text-center">
              <motion.button
                type="button"
                onClick={() => navigate("/signup")}
                className="text-amber-400 hover:text-[#e6c200] transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Back to Login
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
