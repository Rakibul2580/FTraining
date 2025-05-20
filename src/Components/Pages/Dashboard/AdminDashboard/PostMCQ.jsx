import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlus,
  FaQuestionCircle,
  FaList,
  FaCheckCircle,
} from "react-icons/fa";

const CPD30 = [
  "CPD30 - Disruptive Passengers",
  "CPD30 - Cabin Secure",
  "CPD30 - CDF PA's",
  "CSAT, POSI and FLEET HUB",
];

const CPD33 = [
  "First Aid - Universal Approach",
  "Summary of First Aid Amendments",
  "Fraud & Pilferage",
  "Outstanding Customer Care",
  "Familiarization",
];

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

  const [isOn, setIsOn] = useState("CPD30");
  const [items, setItems] = useState([]);

  const handleToggle = (data) => {
    setIsOn(data);
    setItems(data === "CPD30" ? CPD30 : CPD33);
  };

  const handelCategory = (data) => {
    const slideCategory = slides.filter((item) => item.category === data);
    setSlideCategoryIndex(slideCategory);
  };

  const postMcq = async () => {
    try {
      const token = getToken();
      if (!token) return;
      console.log(mcq);
      const result = await axios.post(
        "https://ftraining-s.vercel.app/api/mcq",
        mcq,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMcq({
        question: "",
        options: ["", "", "", ""],
        correctAnswer: "",
        category: "",
        slideIndex: mcq.slideIndex,
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

        <div className="flex p-6">
          <AnimatePresence>
            <motion.button
              key="button1"
              className={`px-6 py-3 ${
                isOn === "CPD30"
                  ? "bg-green-500 border-b-2 border-green-950 scale-100 transition duration-500"
                  : "bg-red-700 scale-100 transition duration-500"
              } rounded-l-lg text-white font-semibold shadow-md`}
              animate={isOn ? "on" : "off"}
              initial="off"
              onClick={() => handleToggle("CPD30")}
            >
              CPD 30
            </motion.button>
          </AnimatePresence>

          <AnimatePresence>
            <motion.button
              key="button2"
              className={`px-6 py-3 ${
                isOn === "CPD33"
                  ? "bg-green-500 border-b-2 border-green-950 scale-100 transition duration-500"
                  : "bg-red-700 scale-100 transition duration-500"
              } rounded-r-lg text-white font-semibold shadow-md`}
              animate={isOn ? "on" : "off"}
              initial="off"
              onClick={() => handleToggle("CPD33")}
            >
              CPD 33
            </motion.button>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* <div className="flex items-center">
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
            </div> */}

            <div className="flex items-center">
              <FaList className="text-green-900 mr-2" />

              <select
                onChange={(e) => handelCategory(e.target.value)}
                className="w-full p-3 bg-blue-950 rounded-lg border border-green-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="General">Select Module Item</option>

                {items.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
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
