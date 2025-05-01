import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const url = isLogin
      ? "https://ftraining-18rregde7-rakibul2580s-projects.vercel.app/login"
      : "https://ftraining-18rregde7-rakibul2580s-projects.vercel.app/signup";
    const data = isLogin
      ? { email, password }
      : { email, password, name, age, role, gender };

    try {
      const response = await axios.post(url, data);
      setSuccess(response.data.message);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
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
        className="relative z-10 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Form Card */}
        <motion.div
          className="bg-white p-6 rounded-3xl rounded-bl-none shadow-lg w-full max-w-md border border-amber-400"
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
              {isLogin ? "Login" : "Sign Up"}
            </h2>
            <AnimatePresence>
              {!isLogin && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div className="mb-4" variants={inputVariants}>
                    <label className="block text-green-900 mb-1">Name</label>
                    <motion.input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 text-green-900"
                      required
                      whileFocus="focus"
                    />
                  </motion.div>
                  <motion.div className="mb-4" variants={inputVariants}>
                    <label className="block text-green-900 mb-1">Age</label>
                    <motion.input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 text-green-900"
                      required
                      whileFocus="focus"
                    />
                  </motion.div>
                  <motion.div className="mb-4" variants={inputVariants}>
                    <label className="block text-green-900 mb-1">Role</label>
                    <motion.select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 text-green-900"
                      required
                      whileFocus="focus"
                    >
                      <option value="">Select Role</option>
                      <option value="student">Student</option>
                      <option value="instructor">Instructor</option>
                      <option value="admin">Admin</option>
                    </motion.select>
                  </motion.div>
                  <motion.div className="mb-4" variants={inputVariants}>
                    <label className="block text-green-900 mb-1">Gender</label>
                    <motion.select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 text-green-900"
                      required
                      whileFocus="focus"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </motion.select>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div className="mb-4" variants={inputVariants}>
              <label className="block text-green-900 mb-1">Email</label>
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 text-green-900"
                required
                whileFocus="focus"
              />
            </motion.div>
            <motion.div className="mb-4" variants={inputVariants}>
              <label className="block text-green-900 mb-1">Password</label>
              <motion.input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 text-green-900"
                required
                whileFocus="focus"
              />
            </motion.div>
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
              className="w-full bg-amber-400 text-green-900 p-2 rounded-br-none rounded-full hover:bg-[#e6c200] transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {isLogin ? "Log in" : "Sign Up"}
            </motion.button>
            <div className="mt-4 text-center">
              <motion.button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-amber-400 hover:text-[#e6c200] transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {isLogin
                  ? "Don't have an account? Sign Up"
                  : "Already have an account? Log in"}
              </motion.button>
            </div>
            {isLogin && (
              <div className="mt-2 text-center">
                <motion.button
                  onClick={() => navigate("/forgot-password")}
                  className="text-amber-400 hover:text-[#e6c200] transition-colors"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Forgot username or password?
                </motion.button>
              </div>
            )}
            <div className="mt-2 text-center text-green-900 text-sm">
              Cookies must be enabled in your browser
            </div>
          </form>
        </motion.div>

        {/* First Access Info Card (Visible only on Login) */}
        <AnimatePresence>
          {isLogin && (
            <motion.div
              className="bg-white p-6 rounded-3xl rounded-bl-none shadow-lg w-full max-w-md border border-amber-400"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              <h2 className="text-lg font-semibold mb-2 text-amber-400">
                FIRST ACCESS?
              </h2>
              <p className="text-green-900">
                Use the "Forgot username or password?" feature to receive your
                first password
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SignUp;
