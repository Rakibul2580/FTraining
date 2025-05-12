import React, { useState, useCallback, useMemo, useEffect } from "react";

import axios from "axios";
import Modal from "react-modal";
import { motion } from "framer-motion";
import {
  FaQuestionCircle,
  FaUsers,
  FaUserPlus,
  FaHeading,
  FaCheckCircle,
  FaTimesCircle,
  FaBars,
  FaLayerGroup,
  FaXRay,
  FaXbox,
  FaXing,
  FaXingSquare,
} from "react-icons/fa";
import PostSlide from "./PostSlide";
import PostMCQ from "./PostMCQ";
import UserRoles from "./UserRoles";
import { FaXmark, FaXTwitter } from "react-icons/fa6";

// Check if #root exists before setting Modal app element
if (document.getElementById("root")) {
  Modal.setAppElement("#root");
} else {
  console.error(
    'Root element not found. Ensure your app renders into a <div id="root"> element.'
  );
}

const InputField = ({ icon: Icon, value, onChange, placeholder, type }) => (
  type ? type : "text",
  (
    <div className="flex items-center">
      <Icon className="text-green-800 mr-2" />
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 rounded-lg border border-green-900 text-green-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
    </div>
  )
);

const Button = ({ onClick, children, className = "" }) => (
  <motion.button
    onClick={onClick}
    className={`bg-amber-400 text-blue-950 px-4 py-2 rounded-lg flex items-center ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
);

const AdminDashboard = ({ user, data }) => {
  const [slides, setSlides] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
  const [users, setUsers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebar, setSideBar] = useState("Post Slide");

  const getToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found. Please log in again.");
      window.location.href = "/login";
    }
    return token;
  };

  const fetchSlides = useCallback(async () => {
    try {
      const token = getToken();
      if (!token) return;
      const response = await axios.get(
        "https://ftraining-s.vercel.app//api/slides",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSlides(response.data || []);
    } catch (error) {
      console.error("Error fetching slides:", error);
      setError(error.response?.data?.message || "Failed to fetch slides.");
    }
  }, []);

  const fetchUsers = useCallback(async () => {
    try {
      const token = getToken();
      if (!token) return;
      const response = await axios.get(
        "https://ftraining-s.vercel.app//api/users",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUsers(response.data || []);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(error.response?.data?.message || "Failed to fetch users.");
    }
  }, []);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      await Promise.all([fetchUsers(), fetchSlides()]);
      setLoading(false);
    };
    loadData();
  }, [fetchUsers, fetchSlides]);

  const confirmAction = useCallback((action) => {
    setModalIsOpen(true);
    setModalAction(() => action);
  }, []);

  const executeAction = useCallback(async () => {
    if (modalAction) {
      try {
        await modalAction();
      } catch (error) {
        console.error("Error executing action:", error);
        setError(error.response?.data?.message || "Action failed.");
      }
      setModalIsOpen(false);
      setModalAction(null);
    }
  }, [modalAction]);

  const updateUserRole = useCallback(
    async (email, role) => {
      try {
        const token = getToken();
        if (!token) return;
        await axios.put(
          `https://ftraining-s.vercel.app//api/user/role/${email}`,
          { role },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        await fetchUsers();
      } catch (error) {
        console.error("Error updating user role:", error);
        setError(
          error.response?.data?.message || "Failed to update user role."
        );
      }
    },
    [fetchUsers]
  );

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    }),
    []
  );

  if (loading) {
    return <div className="text-white text-center p-6">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-6">
        {error}
        <button
          onClick={() => window.location.reload()}
          className="ml-4 bg-amber-400 text-blue-950 px-4 py-2 rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  // Sidebar variants for animation
  const sidebarVariants = {
    open: {
      width: 250,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      width: 60,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <motion.div
        className="bg-blue-900 text-white p-3 flex flex-col fixed top-0 left-0 h-screen z-10"
        initial="closed"
        animate={isSidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div
          className={`mb-6 flex h-8 items-center   ${
            isSidebarOpen ? "justify-start" : "justify-center"
          }`}
        >
          <motion.button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isSidebarOpen ? (
              <FaXmark className="text-amber-400 ml-1 text-2xl " />
            ) : (
              <FaLayerGroup className="text-amber-400 text-2xl" />
            )}
          </motion.button>
          {isSidebarOpen && (
            <motion.h2
              className="ml-4 text-xl font-bold text-amber-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Navigation
            </motion.h2>
          )}
        </div>

        {[
          { op: "Post Slide", cl: "Slide", icon: <FaHeading /> },
          { op: "Post MCQ", cl: "MCQ", icon: <FaQuestionCircle /> },
          { op: "User Management", cl: "Users", icon: <FaUsers /> },
        ].map((item, i) => (
          <motion.button
            className="flex items-center text-left cursor-pointer my-1 py-1 px-2 rounded hover:bg-amber-400 hover:text-blue-950 transition-colors duration-200"
            onClick={() => setSideBar(item.op)}
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2 text-xl">{item.icon}</span>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: isSidebarOpen ? 1 : 0,
                x: isSidebarOpen ? 0 : -10,
              }}
              transition={{ duration: 0.3 }}
              className="whitespace-nowrap"
            >
              {isSidebarOpen && item.op}
            </motion.span>
          </motion.button>
        ))}
      </motion.div>
      <motion.div
        className="p-6 bg-emerald-200 text-white min-h-screen"
        animate={{
          marginLeft: isSidebarOpen ? 250 : 60,
          width: isSidebarOpen ? "calc(100% - 250px)" : "calc(100% - 60px)",
        }}
      >
        <motion.h1
          className="text-4xl font-bold mb-8 text-green-900 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Admin Dashboard
        </motion.h1>

        {/* Slide Management */}
        {sidebar === "Post Slide" && (
          <PostSlide
            confirmAction={confirmAction}
            getToken={getToken}
            data={data}
            InputField={InputField}
            Button={Button}
            fetchSlides={fetchSlides}
            setSlides={setSlides}
            slides={slides}
          />
        )}

        {/* MCQ Management */}
        {sidebar === "Post MCQ" && (
          <PostMCQ
            InputField={InputField}
            Button={Button}
            cardVariants={cardVariants}
            data={data}
            slides={slides}
            getToken={getToken}
          />
        )}

        {/* User Role Management */}
        {sidebar === "User Management" && (
          <UserRoles
            confirmAction={confirmAction}
            cardVariants={cardVariants}
            users={users}
            updateUserRole={updateUserRole}
          />
        )}

        {/* Confirmation Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="bg-blue-900 p-6 rounded-lg max-w-md mx-auto mt-20 text-white"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-amber-400">
              Confirm Action
            </h2>
            <p className="mb-4 text-green-500">
              Are you sure you want to proceed with this action?
            </p>
            <div className="flex justify-end space-x-4">
              <Button
                onClick={() => setModalIsOpen(false)}
                className="bg-blue-950"
              >
                <FaTimesCircle className="mr-2 text-amber-400" />{" "}
                <span className="text-amber-400">Cancel</span>
              </Button>
              <Button onClick={executeAction}>
                <FaCheckCircle className="mr-2" /> Confirm
              </Button>
            </div>
          </motion.div>
        </Modal>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
