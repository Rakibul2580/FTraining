import React, { useCallback, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserContext from "../../../UserProvider/UserProvider";

const Enrollment = () => {
  const { title: prompt } = useParams();
  const { user } = useContext(UserContext);
  console.log(user);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    amount: "",
    additionalNotes: "",
    cardLast4: "",
    course: prompt || "",
    status: "pending",
    cardUserName: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false); // Add loading state for submission
  const [submitError, setSubmitError] = useState(""); // Add error state for submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found. Please log in again.");
      window.location.href = "/login";
      return null;
    }
    return token;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setSubmitLoading(true); // Start loading
    setSubmitError(""); // Reset error
    setSubmitted(false); // Reset submitted state

    try {
      const token = getToken();
      if (!token) return;

      // Send formData to the backend
      const response = await axios.post(
        "http://localhost:5000/api/enroll",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setSubmitted(true);
        setLoading(false);
        console.log("Enrollment successful:", response.data);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error submitting enrollment:", error);
      setSubmitError(
        error.response?.data?.message ||
          "Failed to submit enrollment. Please try again."
      );
    } finally {
      setSubmitLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md text-green-600 bg-white p-6 shadow-xl rounded-2xl"
      >
        <motion.h2
          className="text-2xl font-bold text-center mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {prompt || "Course"} <br /> Course Enrollment
        </motion.h2>
        {error && <p className="text-red-600 text-center">{error}</p>}
        {submitLoading && (
          <p className="text-center">Submitting enrollment...</p>
        )}
        {submitError && (
          <p className="text-red-600 text-center">{submitError}</p>
        )}
        {submitted ? (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-green-600 font-semibold">
              Successfully Enrolled!
            </p>
            <p className="mt-2">Thank you, {formData?.name}.</p>
          </motion.div>
        ) : (
          <>
            <div className="space-y-2 mb-4 text-lg">
              <h1>
                Name: <span className="text-gray-500">({formData?.name})</span>
              </h1>
              <h1>
                Email:{" "}
                <span className="text-gray-500">({formData?.email})</span>
              </h1>
            </div>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div>
                <label htmlFor="amount" className="block font-medium mb-1">
                  Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 100"
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="cardLast4" className="block font-medium mb-1">
                  Card Last 4 Digits
                </label>
                <input
                  type="number"
                  id="cardLast4"
                  name="cardLast4"
                  value={formData.cardLast4}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 1234"
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label
                  htmlFor="cardUserName"
                  className="block font-medium mb-1"
                >
                  Card User Name
                </label>
                <input
                  type="text"
                  id="cardUserName"
                  name="cardUserName"
                  value={formData.cardUserName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label
                  htmlFor="additionalNotes"
                  className="block font-medium mb-1"
                >
                  Additional Notes
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Some additional information"
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading || submitLoading} // Disable during loading
              >
                Enroll Now
              </motion.button>
            </motion.form>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Enrollment;
