import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaPlus,
  FaQuestionCircle,
  FaList,
  FaCheckCircle,
} from "react-icons/fa";

const PostMCQ = ({
  cardVariants,
  getToken,
  slides,
  data,
  InputField,
  Button,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [error, setError] = useState(null);

  const [slideCategoryIndex, setSlideCategoryIndex] = useState([]);
  const [mcq, setMcq] = useState({
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
    slideIndex: {},
  });

  const handelCategory = (data) => {
    const slideCategory = slides.filter((item) => item.category === data);
    setSlideCategoryIndex(slideCategory);
  };

  const postMcq = async () => {
    try {
      const token = getToken();
      if (!token) return;
      const result = await axios.post("http://localhost:5000/api/mcq", mcq, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMcq({
        question: "",
        options: ["", "", "", ""],
        correctAnswer: "",
        category: "",
        slideIndex: {},
      });
    } catch (error) {
      console.error("Error posting MCQ:", error);
      setError(error.response?.data?.message || "Failed to post MCQ.");
    }
  };

  return (
    <div>
      <motion.div
        className="mb-10 bg-green-900/50 p-6 rounded-lg shadow-lg"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-blue-950 text-center py-4 rounded-xl mb-4">
          <h2 className="text-xl font-bold font-serif">Post MCQ</h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <FaList className="text-green-900 mr-2" />

              <select
                onChange={(e) => setSlideIndex(e.target.value)}
                className="w-full p-3 bg-blue-950 rounded-lg border border-green-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="General">Select Module Category</option>

                {data.map((item) => (
                  <>
                    <option key={item.id} value={item.id - 1}>
                      {item.category}
                    </option>
                  </>
                ))}
              </select>
            </div>

            <div className="flex items-center">
              <FaList className="text-green-900 mr-2" />

              <select
                onChange={(e) => handelCategory(e.target.value)}
                className="w-full p-3 bg-blue-950 rounded-lg border border-green-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="General">Select Module Item</option>

                {data[slideIndex].items.map((item, i) => (
                  <>
                    <option key={i} value={item}>
                      {item}
                    </option>
                  </>
                ))}
              </select>
            </div>

            <div className="flex items-center">
              <FaList className="text-green-900 mr-2" />

              <select
                onChange={(e) =>
                  setMcq({
                    ...mcq,
                    slideIndex: slideCategoryIndex[e.target.value],
                  })
                }
                // onChange={(e) => handelSlideIndex(e.target.value)}
                className="w-full p-3 bg-blue-950 rounded-lg border border-green-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="1">Select Slide Index</option>
                {slideCategoryIndex?.map((option, index) => (
                  <option key={index} value={index}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
            <InputField
              icon={FaQuestionCircle}
              value={mcq.question}
              onChange={(e) => setMcq({ ...mcq, question: e.target.value })}
              placeholder="Question"
            />
            {mcq.options.map((option, index) => (
              <InputField
                key={index}
                icon={FaList}
                value={option}
                onChange={(e) => {
                  const newOptions = [...mcq.options];
                  newOptions[index] = e.target.value;
                  setMcq({ ...mcq, options: newOptions });
                }}
                placeholder={`Option ${index + 1}`}
              />
            ))}
            <InputField
              icon={FaCheckCircle}
              value={mcq.correctAnswer}
              onChange={(e) =>
                setMcq({ ...mcq, correctAnswer: e.target.value })
              }
              placeholder="Correct Answer"
            />
          </div>
        </div>
        <Button className="my-5" onClick={() => postMcq()}>
          <FaPlus className="mr-2" /> Post MCQ
        </Button>
      </motion.div>
    </div>
  );
};

export default PostMCQ;
