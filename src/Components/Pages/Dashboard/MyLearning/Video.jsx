import React, { useState } from "react";
import Typography from "./Typography";

const Video = () => {
  const videos = [
    { title: "Fire Proof Gash Bag", status: "Not completed" },
    { title: "8200 Differences", status: "Not completed" },
    { title: "Briefing - Do's and Don't", status: "Not completed" },
    { title: "Safety Office notifications", status: "Not completed" },
    { title: "Safety Alerts", status: "Not completed" },
    { title: "Use of English", status: "Not completed" },
    { title: "Use of onboard facilities", status: "Not completed" },
    { title: "Bag left unattended", status: "Not completed" },
    { title: "Docunet", status: "Not completed" },
    { title: "Go Around", status: "Not completed" },
    { title: "Brace Position", status: "Not completed" },
    { title: "NITS", status: "Not completed" },
    { title: "Offloading a cabin bag", status: "Not completed" },
    { title: "SOS Demo - Land", status: "Not completed" },
    { title: "SOS Demo - Water", status: "Not completed" },
    { title: "Serving Hot Drinks and Hot Meals", status: "Not completed" },
    { title: "Cabin Secure", status: "Not completed" },
    { title: "Flight Deck observer jumpseat", status: "Not completed" },
    { title: "G4 Right", status: "Not completed" },
    { title: "vPos update and Docunet", status: "Not completed" },
    { title: "End of duty", status: "Not completed" },
    { title: "Pilot seat", status: "Not completed" },
    { title: "Flight Deck", status: "Not completed" },
    { title: "G4 Right Hand Side", status: "Not completed" },
    { title: "G4 Left Hand Side", status: "Not completed" },
  ];

  const slides = [
    { title: "1. --", content: "" },
    { title: "2. Objectives", content: "" },
    { title: "3. Disruptive Behaviour in Customer...", content: "" },
    { title: "4. --", content: "" },
    { title: "5. --", content: "" },
    { title: "6. Causes of Passenger Disruption", content: "" },
    { title: "7. Causes of Passenger Disruption", content: "" },
    { title: "1. --", content: "" },
    { title: "2. Objectives", content: "" },
    { title: "3. Disruptive Behaviour in Customer...", content: "" },
    { title: "4. --", content: "" },
    { title: "5. --", content: "" },
    { title: "6. Causes of Passenger Disruption", content: "" },
    { title: "7. Causes of Passenger Disruption", content: "" },
  ];

  const [currentSlide, setCurrentSlide] = useState(5); // Slide 6 is selected by default (0-based index)

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <section className="py-10" style={{ fontFamily: "'Georgia', serif" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="lg:w-3/4 bg-white p-6 rounded-3xl rounded-bl-none shadow-lg border border-amber-400">
            <div className="flex justify-between items-center mb-4">
              <h1
                className="text-3xl md:text-4xl font-bold text-green-900"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Disruptive <span className="text-amber-400">Passengers</span>
              </h1>
              <div className="flex items-center">
                <span className="text-green-900 mr-2">Slides</span>
                <span className="text-green-900">
                  {currentSlide + 1} / {slides.length}
                </span>
              </div>
            </div>

            <Typography
              h1="Causes of Passenger Disruption"
              h2="Intoxication: Excessive alcohol consumption can impair judgement"
              p="While many reasons may exist, most events are triggered by the below:"
              li1="Intoxication: Excessive alcohol consumption can impair judgement and lead to disruptive behaviour"
              li2="Delays: Can lead to heightened emotions and impatience among passengers"
              li3="Mental Health: Anxiety, panic attacks or other mental health conditions may lead to disruptive behaviour"
              li4="Miscommunication: Breakdowns in communication may lead to tense situations"
              li5="Breakdowns in communication may lead to tense situations"
              div="CPD 30 - Continuous Professional Development"
              h1Class="text-2xl font-bold text-green-900 mb-2"
              h2Class="text-xl font-semibold text-amber-400 mb-2"
              pClass="text-green-900 text-base mb-2"
              liClass="text-green-900 text-base mb-1"
              divClass="text-green-900 font-semibold"
            />

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <div className="flex space-x-2">
                <button className="bg-amber-400 text-green-900 p-2 rounded-br-none rounded-full hover:bg-[#e6c200] transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                <button className="bg-amber-400 text-green-900 p-2 rounded-br-none rounded-full hover:bg-[#e6c200] transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
                <button
                  onClick={handlePrevSlide}
                  className={`p-2 rounded-br-none rounded-full ${
                    currentSlide === 0
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-amber-400 text-green-900 hover:bg-[#e6c200]"
                  }`}
                  disabled={currentSlide === 0}
                >
                  <svg
                    className="w-5 h-5"
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
                <button
                  onClick={handleNextSlide}
                  className={`p-2 rounded-br-none rounded-full ${
                    currentSlide === slides.length - 1
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-amber-400 text-green-900 hover:bg-[#e6c200]"
                  }`}
                  disabled={currentSlide === slides.length - 1}
                >
                  <svg
                    className="w-5 h-5"
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

          {/* Sidebar with Scrollable Slides */}
          <div className="lg:w-1/4 bg-white p-4 rounded-3xl rounded-bl-none shadow-lg border border-amber-400">
            <h2
              className="text-lg font-semibold text-green-900 mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              <span className="text-amber-400">Slides</span>
            </h2>
            <div className="max-h-[400px] overflow-y-auto">
              <ul className="space-y-2">
                {slides.map((slide, index) => (
                  <li
                    key={index}
                    className={`p-2 rounded flex items-center cursor-pointer ${
                      currentSlide === index
                        ? "bg-amber-400 text-green-900"
                        : "bg-gray-100 text-green-900 hover:bg-amber-100"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <span className="mr-2">{slide.title.split(".")[0]}.</span>
                    <span>{slide.title.split(".")[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
