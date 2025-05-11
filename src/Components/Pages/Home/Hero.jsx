import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// স্লাইডের তালিকা
const slides = [
  {
    image: "https://i.ibb.co/S7mcd1bv/image13.jpg",
    heading: "Launch Your Aviation Career",
    subheading:
      "Join SkyCrew Pilot Training for world-class flight instruction!",
  },
  {
    image: "https://i.ibb.co/S7mcd1bv/image13.jpg",
    heading: "Master the Skies",
    subheading: "Become a skilled pilot with our expert-led courses!",
  },
  {
    image: "https://i.ibb.co/S7mcd1bv/image13.jpg",
    heading: "Fly with Confidence",
    subheading: "Transform your passion into a professional pilot career!",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // অটো-স্লাইড ফাংশনালিটি
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // প্রতি ৫ সেকেন্ডে স্লাইড পরিবর্তন

    return () => clearInterval(slideInterval); // কম্পোনেন্ট আনমাউন্ট হলে ক্লিনআপ
  }, []);

  // আগের স্লাইডে যাওয়ার ফাংশন
  const goToPrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // পরের স্লাইডে যাওয়ার ফাংশন
  const goToNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  // নির্দিষ্ট স্লাইডে যাওয়ার জন্য ডট ক্লিক ফাংশন
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden bg-black">
      {/* স্লাইডার ইমেজ এবং টেক্সট */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
            {/* ইমেজ এবং গ্রেডিয়েন্ট ওভারলে */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.heading}
                className={`w-full h-full saturate-150 object-cover transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-70" : "opacity-0"
                }`}
                loading="lazy"
              />
              {/* গ্রেডিয়েন্ট ওভারলে */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6))`,
                }}
              ></div>
            </div>
            {/* টেক্সট ওভারলে */}
            <div className="relative z-10">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400 mb-3 sm:mb-4"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {slide.heading}
              </h1>
              <p
                className="text-lg sm:text-xl lg:text-2xl text-white"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {slide.subheading}
              </p>
              <Link
                to="/signup"
                className="inline-block mt-5 bg-amber-400 text-green-900 px-4 sm:px-6 py-2 sm:py-3 rounded-br-none rounded-full font-semibold hover:bg-[#e6c200] transition-colors duration-300"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* আগে-পিছে বাটন */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-900 text-white p-2 sm:p-3 rounded-full hover:bg-red-950 transition-all duration-300"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-900 text-white p-2 sm:p-3 rounded-full hover:bg-red-950 transition-all duration-300"
      >
        ❯
      </button>

      {/* নেভিগেশন ডট */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-amber-400 scale-125"
                : "bg-white opacity-70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
