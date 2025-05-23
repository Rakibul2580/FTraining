import React, { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  FaPlus,
  FaTrash,
  FaHeading,
  FaParagraph,
  FaList,
  FaImage,
  FaCheckDouble,
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
];

const PostSlide = ({
  fetchSlides,
  InputField,
  confirmAction,
  Button,
  getToken,
  slides,
}) => {
  const [error, setError] = useState(null);

  const [slideData, setSlideData] = useState({
    h1: "",
    h2: "",
    p: "",
    li1: "",
    li2: "",
    li3: "",
    li4: "",
    li5: "",
    div: "",
    img: "",
    category: "",
    MCQ: [],
  });

  console.log(slideData);
  const [isOn, setIsOn] = useState("CPD30");
  const [items, setItems] = useState([]);

  const handleToggle = (data) => {
    setIsOn(data);
    setItems(data === "CPD30" ? CPD30 : CPD33);
  };

  const postSlide = useCallback(async () => {
    try {
      const token = getToken();
      if (!token) return;
      await axios.post("https://ftraining-s.vercel.app/api/slide", slideData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSlideData({
        h1: "",
        h2: "",
        p: "",
        li1: "",
        li2: "",
        li3: "",
        li4: "",
        li5: "",
        div: "",
        img: "",
        category: slideData.category,
        MCQ: [],
      });
      await fetchSlides();
    } catch (error) {
      console.error("Error posting slide:", error);
      setError(error.response?.data?.message || "Failed to post slide.");
    }
  }, [slideData, fetchSlides]);

  const deleteSlide = useCallback(
    async (id) => {
      console.log(id);
      try {
        const token = getToken();
        if (!token) return;
        await axios.delete(`https://ftraining-s.vercel.app/api/slide/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        await fetchSlides();
      } catch (error) {
        console.error("Error deleting slide:", error);
        setError(error.response?.data?.message || "Failed to delete slide.");
      }
    },
    [fetchSlides]
  );

  return (
    <div>
      <motion.div className="mb-10 bg-green-500/50 p-6 rounded-lg shadow-lg">
        <div className="bg-green-900  text-center py-4 rounded-xl mb-4">
          <h2 className="text-xl font-bold font-serif">Post Slide</h2>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <div className="flex items-center">
            <FaCheckDouble className="text-green-800 mr-2" />
            <select
              onChange={(e) => setSlideIndex(e.target.value)}
              className="w-full p-3 rounded-lg border border-green-900 text-green-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="">Select Module Category</option>
              {items.map((item, i) => (
                <option key={i} value={i}>
                  {item.title}
                </option>
              ))}
            </select>
          </div> */}

          <div className="flex items-center">
            <FaCheckDouble className="text-green-800 mr-2" />
            <select
              onChange={(e) =>
                setSlideData({ ...slideData, category: e.target.value })
              }
              className="w-full p-3 rounded-lg border border-green-900 text-green-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="">Select Module Item</option>
              {items.map((item, i) => (
                <>
                  <option key={i} value={item}>
                    {item}
                  </option>
                </>
              ))}
            </select>
          </div>

          <InputField
            icon={FaHeading}
            value={slideData.h1}
            onChange={(e) => setSlideData({ ...slideData, h1: e.target.value })}
            placeholder="H1"
          />
          <InputField
            icon={FaHeading}
            value={slideData.h2}
            onChange={(e) => setSlideData({ ...slideData, h2: e.target.value })}
            placeholder="H2"
          />
          <InputField
            icon={FaParagraph}
            value={slideData.p}
            onChange={(e) => setSlideData({ ...slideData, p: e.target.value })}
            placeholder="Paragraph"
          />
          {["li1", "li2", "li3", "li4", "li5"].map((field, index) => (
            <InputField
              key={field}
              icon={FaList}
              value={slideData[field]}
              onChange={(e) =>
                setSlideData({ ...slideData, [field]: e.target.value })
              }
              placeholder={`List Item ${index + 1}`}
            />
          ))}
          <InputField
            icon={FaParagraph}
            value={slideData.div}
            onChange={(e) =>
              setSlideData({ ...slideData, div: e.target.value })
            }
            placeholder="Footer Div"
          />
          <InputField
            icon={FaImage}
            value={slideData.img}
            onChange={(e) =>
              setSlideData({ ...slideData, img: e.target.value })
            }
            placeholder="Image URL"
          />
        </div>
        <Button className="my-5" onClick={() => confirmAction(postSlide)}>
          <FaPlus className="mr-2" /> Post Slide
        </Button>
        <ul className="mt-6 space-y-2">
          <AnimatePresence>
            {slides.map((slide) => (
              <motion.li
                key={slide._id}
                className="flex justify-between items-center py-3 px-4 bg-green-900 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <span>{slide.h1 || slide.p || "Slide"}</span>
                <Button
                  onClick={() => confirmAction(() => deleteSlide(slide._id))}
                  className="bg-emerald-400 text-amber-400"
                >
                  <FaTrash className="mr-2" /> Delete
                </Button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </motion.div>
    </div>
  );
};

export default PostSlide;
