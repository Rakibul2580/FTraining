import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ফিচার ডাটা (অ্যাওয়েসাম ফিচার সেকশনের জন্য)
const features = [
  {
    number: "01",
    icon: "✈️",
    title: "Expert Instructors",
    description:
      "Learn from certified flight instructors with decades of aviation experience, guiding you to success.",
  },
  {
    number: "02",
    icon: "🛩️",
    title: "Modern Aircraft",
    description:
      "Train on state-of-the-art aircraft equipped with the latest technology for a real-world flying experience.",
  },
  {
    number: "03",
    icon: "🎓",
    title: "Comprehensive Courses",
    description:
      "Our programs cover all aspects of pilot training, from private to commercial licenses, ensuring thorough preparation.",
  },
  {
    number: "04",
    icon: "🌍",
    title: "Global Standards",
    description:
      "Our training meets FAA and international aviation standards, preparing you for a global career.",
  },
];

// নতুন ফিচার ডাটা (নতুন ফিচার সেকশনের জন্য)
const newFeatures = [
  {
    number: "01",
    icon: "🖥️",
    title: "Advanced Simulators",
    description:
      "Practice in cutting-edge flight simulators to hone your skills in a safe, controlled environment.",
  },
  {
    number: "02",
    icon: "🛠️",
    title: "Personalized Training",
    description:
      "Receive tailored instruction to match your learning pace and career goals.",
  },
  {
    number: "03",
    icon: "🏅",
    title: "Proven Success",
    description:
      "Join thousands of graduates who have successfully launched their aviation careers with us.",
  },
];

// স্ট্যাটিস্টিক্স ডাটা
const stats = [
  { number: "50+", label: "Aircraft Fleet", icon: "✈️" },
  { number: "10,000+", label: "Trained Pilots", icon: "👨‍✈️" },
  { number: "100+", label: "Certified Instructors", icon: "🎓" },
  { number: "25+", label: "Years of Excellence", icon: "🏆" },
];

// ইমেজ লিংকগুলো
const images = [
  "https://media.cntravellerme.com/photos/6799de6ebb2dc566dcbf6178/16:9/w_2560%2Cc_limit/cafebouloud_05.jpg",
  "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2024/12/30141812/new-restaurants-hk-jan-2025-medora.jpg",
  "https://i.ibb.co/S7mcd1bv/image13.jpg",
];

const Features = () => {
  // বর্তমান ইমেজ ইনডেক্স ট্র্যাক করার জন্য স্টেট
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // প্রতি ৩ সেকেন্ডে ইমেজ পরিবর্তন করার জন্য useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // ৩ সেকেন্ড (3000ms)

    // কম্পোনেন্ট আনমাউন্ট হলে ইন্টারভাল ক্লিয়ার করা
    return () => clearInterval(interval);
  }, []);

  // Previous বাটনের জন্য ফাংশন
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Next বাটনের জন্য ফাংশন
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // ডট ক্লিক করার জন্য ফাংশন
  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      {/* স্ট্যাটিস্টিক্স সেকশন */}
      <section
        className="py-8 sm:py-10 lg:py-5 "
        style={{
          backgroundImage: `url('https://live.themewild.com/restrou/assets/img/shape/01.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex space-x-3 border p-3 sm:p-4 rounded-4xl rounded-bl-none items-center"
              >
                <div className="bg-white bg-opacity-20 rounded-full p-3 sm:p-4">
                  <span className="text-3xl sm:text-4xl">{stat.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl text-left font-bold">
                    {stat.number}
                  </h3>
                  <p className="text-base sm:text-lg">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Awesome Features সেকশন */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-4xl mb-10 text-center md:text-5xl font-bold text-green-900">
              Our <span className="text-amber-400 ">Premier</span> Features
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#FFF5E6] relative p-4 sm:p-6 rounded-[70px] rounded-bl-none rounded-tr-none shadow-lg text-center transform transition-transform duration-300 hover:scale-105"
              >
                <div className="bg-amber-400 border-8 border-white absolute -top-1 -left-1 rounded-full p-2 sm:p-3 inline-block mb-4">
                  <span className="text-2xl sm:text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-4xl sm:text-5xl font-bold text-amber-400 mb-2">
                  {feature.number}
                </h3>
                <h4 className="text-lg sm:text-xl font-semibold text-green-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-green-900 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us সেকশন */}
      <section
        className="py-8 sm:py-12 lg:py-16"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          {/* বাম পাশ: টেক্সট এবং বাটন */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3
              className="text-base sm:text-lg text-amber-400 mb-2"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Why Choose SkyCrew
            </h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 mb-4">
              We Deliver <span className="text-amber-400">Excellence</span> in
              Pilot Training
            </h2>
            <p className="text-green-900 text-base sm:text-lg mb-6">
              Our commitment to quality training, experienced instructors, and
              modern facilities ensures you achieve your aviation goals.
            </p>
            <Link
              to="/signup"
              className="inline-block bg-amber-400 text-green-900 px-4 sm:px-6 py-2 sm:py-3 rounded-br-none rounded-full font-semibold hover:bg-[#e6c200] transition-colors duration-300"
            >
              Enroll Now
            </Link>
          </div>

          {/* ডান পাশ: ইমেজ স্লাইডার এবং কন্ট্রোলার */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img
                src={images[currentImageIndex]}
                alt="Why Choose SkyCrew"
                className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover transition-opacity duration-500 ease-in-out"
                style={{ opacity: 1 }}
                loading="lazy"
              />
            </div>

            {/* কন্ট্রোলার: নেভিগেশন বাটন এবং ডট */}
            <div className="flex items-center absolute left-0 bottom-0 justify-center space-x-2">
              {/* Previous বাটন */}
              <button
                onClick={handlePrev}
                className="bg-green-900 text-white p-1 sm:p-1 rounded-full hover:bg-amber-400 hover:text-green-900 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* ডট ইন্ডিকেটর */}
              <div className="flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2 h-2 sm:w-2 sm:h-2 rounded-full ${
                      currentImageIndex === index
                        ? "bg-amber-400"
                        : "bg-gray-400"
                    } transition-colors duration-300`}
                  />
                ))}
              </div>

              {/* Next বাটন */}
              <button
                onClick={handleNext}
                className="bg-green-900 text-white p-1 sm:p-1 rounded-full hover:bg-amber-400 hover:text-green-900 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* নতুন ফিচার সেকশন */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {newFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#FFF5E6] flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div>
                  <div className="bg-amber-400 rounded-full rounded-bl-none p-3 sm:p-4 inline-block mb-4">
                    <span className="text-2xl sm:text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-bold text-amber-400 mb-2">
                    {feature.number}
                  </h3>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-green-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-green-900 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
