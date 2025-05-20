import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../UserProvider/UserProvider";
import { motion, AnimatePresence } from "framer-motion";

const UsersCourses = () => {
  const { users, loading } = useContext(UserContext);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // কোর্স স্ট্যাটাস পরিবর্তনের ফাংশন
  const updateCourseStatus = async (userId, course, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("অনুগ্রহ করে লগ ইন করুন।");
        navigate("/login");
        return;
      }
      console.log(userId, course, newStatus);
      const response = await axios.put(
        `http://localhost:5000/api/users/${userId}/courses/${course}`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200) {
        // আপডেট করা ডেটা স্টেটে রিফ্রেশ করা
        const updatedUsers = users.map((user) =>
          user._id === userId
            ? {
                ...user,
                courses: user.courses.map((course) =>
                  course.course === course
                    ? { ...course, status: newStatus }
                    : course
                ),
              }
            : user
        );
        alert(`কোর্স স্ট্যাটাস সফলভাবে "${newStatus}"-এ পরিবর্তন করা হয়েছে!`);
      }
    } catch (error) {
      console.error("কোর্স স্ট্যাটাস আপডেট ব্যর্থ:", error);
      setError("কোর্স স্ট্যাটাস আপডেট করতে ব্যর্থ। দয়া করে আবার চেষ্টা করুন।");
    }
  };

  if (loading) return <p>লোড হচ্ছে...</p>;
  //   if (error) return <p className="text-red-600">{error}</p>;

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-10 bg-white p-6 rounded-lg shadow-lg"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-blue-950 text-center py-4 rounded-xl mb-4">
            <h2 className="text-xl font-bold font-serif">Manage All Courses</h2>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-950">
                <th className="p-3 text-left text-amber-400">User Name</th>
                <th className="p-3 text-left text-amber-400">Email</th>
                <th className="p-3 text-left text-amber-400">Course</th>
                <th className="p-3 text-left text-amber-400">Status</th>
                <th className="p-3 text-left text-amber-400">Change Status</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {users?.map((user) =>
                  user.courses?.map((course) => (
                    <motion.tr
                      key={`${user._id}-${course.course}`} // Unique key using userId and course name
                      className="border-b border-green-900 text-green-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <td className="p-3">{user.name}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">{course.course}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${
                            course.status === "Pending"
                              ? "bg-yellow-100 text-yellow-600"
                              : course.status === "Overdue"
                              ? "bg-red-100 text-red-600"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          {course.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <select
                          value={course.status}
                          onChange={(e) =>
                            updateCourseStatus(
                              user._id,
                              course.course,
                              e.target.value
                            )
                          }
                          className="w-full p-3 bg-blue-950 rounded-lg border border-green-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                        >
                          <option value="">Select Status</option>
                          <option value="Pending">Pending</option>
                          <option value="Overdue">Overdue</option>
                          <option value="Accepted">Accepted</option>
                        </select>
                      </td>
                    </motion.tr>
                  ))
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default UsersCourses;
