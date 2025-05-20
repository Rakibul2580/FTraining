import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CPD30 from "./CPD30";
import CPD33 from "./CPD33";
import CC_Videos from "./CC_Videos";
import { nav } from "framer-motion/client";
import axios from "axios";
import UserContext from "../../../UserProvider/UserProvider";

const data = [
  {
    category: "CPD 30",
    id: 1,
    items: [
      {
        title: "safety",
        subTitle: [
          "CPD30 - Disruptive Passengers",
          "CPD30 - Cabin Secure",
          "SCORM package CPD30 - CDF PA's",
        ],
      },
      { title: "customer service", subTitle: ["CSAT, POSI and FLEET HUB"] },
      { title: "quiz", subTitle: ["CPD30 - Quiz"] },
    ],
  },
  {
    category: "CPD 33",
    id: 2,
    items: [
      {
        title: "safety",
        subTitle: [
          "First Aid - Universal Approach",
          "Summary of First Aid Amendments",
        ],
      },
      {
        title: "customer service",
        subTitle: ["Fraud & Pilferage", "Outstanding Customer Care"],
      },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
    ],
  },
  {
    category: "Marketing",
    id: 3,
    items: [
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
    ],
  },
  {
    category: "Business",
    id: 4,
    items: [
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
    ],
  },
  {
    category: "Finance",
    id: 5,
    items: [
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
      { title: "", subTitle: [] },
    ],
  },
  {
    category: "Health",
    id: 6,
    items: [{ title: "Nutrition", subTitle: ["Diet", "Wellness"] }],
  },
];

const MyLearning = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const trainingItems = [
    {
      title: "CPD 30 - July 24",
      dueDate: "13 August 2024, 11:00 PM",
      status: "Overdue",
      classification: "Ryanair",
      renewalRequired: "Yes",
    },
    {
      title: "CPD 33 - April 25",
      dueDate: "29 April 2025, 5:26 PM",
      status: "In Progress",
      classification: "Ryanair",
      renewalRequired: "No",
    },
    {
      title: "Safety Training - Jan 25",
      dueDate: "15 January 2025, 3:00 PM",
      status: "In Progress",
      classification: "Aviation Basics",
      renewalRequired: "Yes",
    },
    {
      title: "Emergency Procedures - Dec 24",
      dueDate: "20 December 2024, 9:00 AM",
      status: "Overdue",
      classification: "Ryanair",
      renewalRequired: "Yes",
    },
    {
      title: "Crew Resource Management - Mar 25",
      dueDate: "10 March 2025, 2:00 PM",
      status: "In Progress",
      classification: "Aviation Advanced",
      renewalRequired: "No",
    },
  ];

  const videos = [
    {
      title: "Training Video 1",
      description: "Learn the basics in this video.",
    },
    {
      title: "Refresh Your Knowledge",
      description: "Refresh your existing knowledge.",
    },
    {
      title: "Advanced Safety Protocols",
      description: "Deep dive into safety measures for aviation.",
    },
    {
      title: "Customer Service Excellence",
      description: "How to provide top-notch service to passengers.",
    },
    {
      title: "Emergency Evacuation Procedures",
      description: "Understand evacuation protocols in emergencies.",
    },
  ];

  const certificates = [
    {
      title: "CSS - Pre-Course Training - Completed",
      date: "25 December 2023",
    },
    {
      title: "Basic Aviation Safety - Completed",
      date: "10 November 2023",
    },
    {
      title: "Customer Service Training - Completed",
      date: "15 October 2023",
    },
    {
      title: "Emergency Procedures - Completed",
      date: "5 September 2023",
    },
  ];

  const checkPermission = (data) => {
    const course = user?.courses?.find((course) => course.course === data);
    if (!course) {
      navigate(`/enrollment/${encodeURIComponent(data)}`);
    } else {
      navigate(`/course/${encodeURIComponent(data)}`);
    }
  };

  return (
    <section className="py-10" style={{ fontFamily: "'Georgia', serif" }}>
      <div className="container mx-auto px-4">
        {/* ওয়েলকাম সেকশন */}
        <div className="bg-white p-6 rounded-3xl rounded-bl-none shadow-lg mb-10 border-l-4 border-amber-400 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold text-green-900 mb-2"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Welcome to Your <span className="text-amber-400">e-Learning</span>{" "}
            Dashboard!
          </h1>
          <p className="text-green-900 text-lg">
            Start your learning journey here.
          </p>
        </div>

        {/* Training Due সেকশন */}
        <div className="mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold text-green-900 mb-6 text-center"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Training <span className="text-amber-400">Due</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingItems.map((item, index) => (
              <button
                onClick={() => checkPermission(item?.title)}
                key={index}
                className="cursor-pointer text-left"
              >
                <div className="bg-white p-6 rounded-3xl rounded-bl-none shadow-lg hover:shadow-xl transition-shadow border border-amber-400">
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    {item?.title}
                  </h3>
                  <p className="text-green-900 text-base mb-1">
                    Due: {item?.dueDate}
                  </p>
                  <p
                    className={`text-base ${
                      item?.status === "Overdue"
                        ? "text-red-600"
                        : "text-amber-400"
                    }`}
                  >
                    Status: {item?.status}
                  </p>
                  <p className="text-green-900 text-base mb-1">
                    Classification: {item?.classification}
                  </p>
                  <p className="text-green-900 text-base">
                    Renewal Required? {item.renewalRequired}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Training Videos সেকশন */}
        <div className="mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold text-green-900 mb-6 text-center"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Training <span className="text-amber-400">Videos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Link to="/courses/CC&Videos" key={index}>
                <div className="bg-white p-6 rounded-3xl rounded-bl-none shadow-lg hover:shadow-xl transition-shadow border border-amber-400">
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-green-900 text-base mb-4">
                    {video.description}
                  </p>
                  <span className="inline-block bg-amber-400 text-green-900 px-4 py-2 rounded-br-none rounded-full font-semibold hover:bg-[#e6c200] transition-colors duration-300">
                    Watch
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* My Certificates সেকশন */}
        <div className="mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold text-green-900 mb-6 text-center"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            My <span className="text-amber-400">Certificates</span>
          </h2>
          <div className="space-y-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-3xl rounded-bl-none shadow-lg flex justify-between items-center border border-amber-400"
              >
                <div>
                  <span className="text-green-900 text-xl font-semibold">
                    {cert.title}
                  </span>
                  <p className="text-green-900 text-base">
                    Completed on: {cert.date}
                  </p>
                </div>
                <a
                  href="#"
                  className="bg-amber-400 text-green-900 px-4 py-2 rounded-br-none rounded-full font-semibold hover:bg-[#e6c200] transition-colors duration-300"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyLearning;
