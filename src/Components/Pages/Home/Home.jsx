import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Features from "./Features";

import { FaFacebookF, FaYoutube, FaShareAlt } from "react-icons/fa";

// ইনস্ট্রাক্টরদের তালিকা (ইমেজ লিংক এবং তথ্য)
const instructors = [
  {
    name: "Captain Michael Brown",
    title: "Chief Flight Instructor",
    image: "https://i.ibb.co/S7mcd1bv/image13.jpg",
  },
  {
    name: "Sarah Johnson",
    title: "Instrument Rating Specialist",
    image: "https://i.ibb.co/S7mcd1bv/image13.jpg",
  },
  {
    name: "David Lee",
    title: "Private Pilot Instructor",
    image: "https://i.ibb.co/S7mcd1bv/image13.jpg",
  },
  {
    name: "Emily Carter",
    title: "Commercial Pilot Trainer",
    image: "https://i.ibb.co/S7mcd1bv/image13.jpg",
  },
];

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <Hero />
      <Features />
      <div className="font-sans">
        {/* Courses Section */}
        <section className="py-16" id="courses">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-blue-900 mb-8">
              Our Training Programs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-2">
                  Private Pilot License
                </h4>
                <p className="text-gray-600 mb-4">
                  Learn the fundamentals of flying and earn your Private Pilot
                  License with our comprehensive course.
                </p>
                <Link to="/signup" className="text-blue-600 hover:underline">
                  Learn More
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-2">
                  Commercial Pilot License
                </h4>
                <p className="text-gray-600 mb-4">
                  Take your skills to the next level and prepare for a career in
                  aviation with our advanced training.
                </p>
                <Link to="/signup" className="text-blue-600 hover:underline">
                  Learn More
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-blue-900 mb-2">
                  Instrument Rating
                </h4>
                <p className="text-gray-600 mb-4">
                  Master flying in diverse weather conditions with our
                  Instrument Rating program.
                </p>
                <Link to="/signup" className="text-blue-600 hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10" style={{ fontFamily: "'Georgia', serif" }}>
          <div className="container mx-auto px-4">
            {/* হেডিং */}
            <div className="text-center mb-12">
              <h3
                className="text-lg text-amber-400 mb-2"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Our Instructors
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-green-900">
                Meet Our <span className="text-amber-400">Expert</span> Flight
                Instructors
              </h2>
            </div>

            {/* ইনস্ট্রাক্টরদের কার্ড */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {instructors.map((instructor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden text-center"
                >
                  {/* ইনস্ট্রাক্টরের ছবি */}
                  <div className="relative">
                    <div className="p-3">
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-full border-2 border-amber-600 p-2 h-64 object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* শেয়ার আইকন এবং সোশ্যাল আইকন */}
                    <div
                      className="absolute bottom-2 right-2"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* শেয়ার আইকন */}
                      <div className="bg-white p-3 rounded-tl-3xl">
                        <div className="bg-amber-400 rounded-full p-2 transform transition-transform duration-300 hover:scale-110">
                          <FaShareAlt className="text-white w-6 h-6" />
                        </div>
                      </div>

                      {/* সোশ্যাল আইকন (হোভারে দেখাবে) */}
                      {hoveredIndex === index && (
                        <div className="absolute bottom-3/3 right-2 flex flex-col space-y-2 bg-white p-2 rounded-l-lg shadow-lg animate-fadeIn">
                          {/* Facebook */}
                          <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:text-[#2D4373] transition-colors duration-300"
                          >
                            <FaFacebookF className="w-8 h-8 p-1 text-white bg-blue-700 rounded-full"></FaFacebookF>
                          </a>
                          {/* Youtube */}
                          <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:text-[#2D4373] transition-colors duration-300"
                          >
                            <FaYoutube className="w-8 h-8 text-red-600 rounded-full"></FaYoutube>
                          </a>
                          {/* Twitter */}
                          <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1DA1F2] hover:text-[#0D95E8] transition-colors duration-300"
                          >
                            <svg
                              className="w-8 h-8"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                          </a>
                          {/* Instagram */}
                          <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#E1306C] hover:text-[#C13584] transition-colors duration-300"
                          >
                            <svg
                              className="w-8 h-8"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072c-4.95.232-6.532 2.318-6.764 7.268C.014 8.62 0 9.029 0 12c0 3.271.014 3.68.072 4.96.232 4.95 2.318 6.532 7.268 6.764 1.28.058 1.689.072 4.96.072s3.68-.014 4.96-.072c4.95-.232 6.532-2.318 6.764-7.268.058-1.28.072-1.689.072-4.96s-.014-3.68-.072-4.96c-.232-4.95-2.318-6.532-7.268-6.764C15.38.014 14.971 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* ইনস্ট্রাক্টরের নাম এবং টাইটেল */}
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-green-900">
                      {instructor.name}
                    </h3>
                    <p
                      className="text-amber-400 text-sm italic"
                      style={{ fontFamily: "'Dancing Script', cursive" }}
                    >
                      {instructor.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10" style={{ fontFamily: "'Georgia', serif" }}>
          <h2 className="text-4xl mb-10 text-center md:text-5xl font-bold text-green-900">
            Training <span className="text-amber-400">Showcase</span>
          </h2>
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            {/* বাম পাশ: টেক্সট এবং বাটন */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3
                className="text-lg text-amber-400 mb-2"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Our Training
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
                Experience <span className="text-amber-400">World-Class</span>{" "}
                Pilot Training
              </h2>
              <p className="text-green-900 text-lg mb-6">
                Discover how our expert instructors and advanced facilities
                prepare you for a successful aviation career with hands-on
                training.
              </p>
              <Link
                to="/signup"
                className="inline-block bg-amber-400 text-green-900 px-4 sm:px-6 py-2 sm:py-3 rounded-br-none rounded-full font-semibold hover:bg-[#e6c200] transition-colors duration-300"
              >
                Enroll Now
              </Link>
            </div>

            {/* ডান পাশ: ভিডিও */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl rounded-bl-none overflow-hidden shadow-lg">
                {/* ইউটিউব ভিডিও এম্বেড */}
                <iframe
                  className="w-full h-[300px] md:h-[400px]"
                  src="https://www.youtube.com/embed/uLgf9qDCJMA"
                  title="Pilot Training Showcase"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                {/* প্লে বাটন ওভারলে */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-amber-400 bg-opacity-80 rounded-full p-4 transform transition-transform duration-300 hover:scale-110">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
