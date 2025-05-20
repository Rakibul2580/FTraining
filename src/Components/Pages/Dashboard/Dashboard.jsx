import React, { useEffect, useState } from "react";
import MyLearning from "./MyLearning/MyLearning";
import axios from "axios";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion"; // framer-motion ইম্পোর্ট

const data = [
  {
    category: "Development",
    id: 1,
    items: ["Frontend", "Backend"],
  },
  {
    category: "Design",
    id: 2,
    items: ["UI/UX", "Prototyping"],
  },
  {
    category: "Marketing",
    id: 3,
    items: ["On-page", "Off-page"],
  },
  {
    category: "Business",
    id: 4,
    items: ["Agile", "Scrum"],
  },
  {
    category: "Finance",
    id: 5,
    items: ["Tax", "Audit"],
  },
  {
    category: "Health",
    id: 6,
    items: ["Diet", "Wellness"],
  },
];

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // লোডিং স্টেট

  // ব্যবহারকারী তথ্য ফেচ করা
  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      const response = await axios.get(
        "https://ftraining-s.vercel.app/api/user",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUser(response.data);
    } catch (error) {
      console.error("Fetch user failed:", error);
      localStorage.removeItem("token");
      setUser(null);
    } finally {
      setLoading(false); // লোডিং সবসময় শেষ হবে
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  // লোডিং অ্যানিমেশনের ভেরিয়েন্ট
  const loadingVariants = {
    hidden: { opacity: 0.5, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, repeat: Infinity, repeatType: "reverse" },
    },
  };

  // কন্টেন্ট ফেড-ইন অ্যানিমেশন
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* লোডিং স্ক্রিন */}
      {loading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center text-blue-900 bg-green-300 z-50"
          variants={loadingVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2 className="text-2xl font-semibold">Loading...</h2>
        </motion.div>
      )}

      {/* কন্টেন্ট */}
      {!loading && (
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          {user && user.role === "admin" ? (
            <AdminDashboard user={user} data={data} />
          ) : (
            <>
              <Navbar />
              <MyLearning user={user} />
              <Footer />
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Dashboard;
