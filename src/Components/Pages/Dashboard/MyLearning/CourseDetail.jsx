import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserContext from "../../../UserProvider/UserProvider";

const CourseDetail = () => {
  const { title } = useParams();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  // Correct isDisabled logic: true if course is not found, false if found
  const isDisabled = !user?.courses.find(
    (course) => course.course === title && course.status === "Accepted"
  );

  // Static data for CPD 30 - July 24
  const course = {
    title: "CPD 30 - July 24",
    dateAssigned: "16 July 2024",
    dueDate: "13 August 2024, 11:00 PM",
    status: "Overdue",
    description: "CPD 30 - Continuous Professional Development",
    progress: 20, // Example progress value
  };

  const checkPermission = (courseTitle) => {
    if (!isDisabled) {
      navigate(`/courses/${courseTitle}`);
    } else {
      alert("You don't have permission to access this course.");
    }
  };

  return (
    <section className="py-10" style={{ fontFamily: "'Georgia', serif" }}>
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 rounded-3xl rounded-bl-none shadow-lg border border-amber-400">
          {/* Breadcrumb */}
          <div className="text-sm text-green-900 mb-4">
            <Link to="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>{" "}
            / <span className="text-green-900">{course.title}</span>
          </div>

          {/* Course Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <svg
                className="w-12 h-12 text-amber-400 mr-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h1 className="text-2xl md:text-3xl font-bold text-green-900">
                {course.title}
              </h1>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Background Circle */}
                <div className="absolute w-32 h-32 border-8 border-gray-200 rounded-full"></div>
                {/* Progress Circle */}
                <div
                  className="absolute w-32 h-32 border-8 rounded-full"
                  style={{
                    borderColor: "transparent transparent #1e40af transparent",
                    transform: `rotate(${
                      -90 + (course.progress / 100) * 360
                    }deg)`,
                  }}
                ></div>
                {/* Text in Center */}
                <div className="text-center text-green-800">
                  <div className="text-2xl font-bold">{course.progress}%</div>
                  <div className="text-sm">Complete</div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="mb-4 md:mb-0">
              <p className="text-green-900 text-base">
                <span className="font-semibold text-amber-400">
                  Date assigned:
                </span>{" "}
                {course.dateAssigned}
              </p>
              <p className="text-green-900 text-base">
                <span className="font-semibold text-amber-400">Due date:</span>{" "}
                {course.dueDate}
              </p>
            </div>
            <div
              className={`flex items-center px-4 py-2 rounded-br-none rounded-full ${
                course.status === "Overdue"
                  ? "bg-red-100 text-red-600"
                  : "bg-amber-100 text-amber-400"
              }`}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              {course.status.toUpperCase()}!
            </div>
          </div>

          {/* Course Description */}
          <div className="border-t border-amber-400 pt-4">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-amber-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332-.477-4.5-1.253"
                />
              </svg>
              <h2 className="text-lg font-semibold text-green-900">
                {course.description}
              </h2>
            </div>
            <div className="flex justify-end space-x-4">
              <Link
                to={`/courses/${course.title}`}
                className="bg-amber-400 text-green-900 px-6 py-2 rounded-br-none rounded-full font-semibold hover:bg-[#e6c200] transition-colors duration-300"
              >
                Launch Course
              </Link>
              {title && title.slice(0, 6) === "CPD 30" && (
                <button
                  onClick={() => checkPermission(title.slice(0, 6))}
                  className={`px-6 py-2 rounded-br-none rounded-full font-semibold transition-colors duration-300 ${
                    isDisabled
                      ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                      : "bg-amber-400 text-green-900 hover:bg-[#e6c200] cursor-pointer"
                  }`}
                >
                  {title.slice(0, 6)}
                </button>
              )}
              {title && title.slice(0, 6) !== "CPD 30" && (
                <button
                  onClick={() => checkPermission(title.slice(0, 6))}
                  className={`px-6 py-2 rounded-br-none rounded-full font-semibold transition-colors duration-300 ${
                    isDisabled
                      ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                      : "bg-amber-400 text-green-900 hover:bg-[#e6c200] cursor-pointer"
                  }`}
                >
                  {title.slice(0, 6)}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;
