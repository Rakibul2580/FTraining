import React from "react";
import { Link } from "react-router-dom";

const safetyVideos = [
  { title: "ABCDE - Universal Approach", status: "Not completed" },
  { title: "PAA - First Aid", status: "Not completed" },
  { title: "Red FAK", status: "Not completed" },
  { title: "PAA - Fire", status: "Not completed" },
  { title: "Burns and Scalds", status: "Not completed" },
  { title: "Asthma", status: "Not completed" },
  { title: "CPR+AED", status: "Not completed" },
];

const sopAndSepVideos = [
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

const securityVideos = [
  { title: "Dpax", status: "Not completed" },
  { title: "Challenging for ID", status: "Not completed" },
  {
    title: "Monitoring of the FC outside the Flight Deck",
    status: "Not completed",
  },
  { title: "Flight Deck door", status: "Not completed" },
  { title: "Security checks during crew change", status: "Not completed" },
];

const doorsAndExitsVideos = [
  { title: "Arming and disarming slides", status: "Not completed" },
  { title: "Disarming Procedures", status: "Not completed" },
  { title: "Airstairs operation", status: "Not completed" },
  { title: "Door closing procedure", status: "Not completed" },
  { title: "Overwing exit briefing", status: "Not completed" },
  { title: "Overwing exits description", status: "Not completed" },
];

const customerExperienceVideos = [
  { title: "Crew Water Procedure", status: "Not completed" },
  { title: "OTS", status: "Not completed" },
  { title: "Magazine distribution", status: "Not completed" },
  { title: "First name not provided", status: "Not completed" },
];

const CoursesView = () => {
  return (
    <section className="py-10" style={{ fontFamily: "'Georgia', serif" }}>
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-green-900 mb-6">
          <Link to="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>{" "}
          / <span className="text-green-900">My courses / CC_Videos</span>
        </div>

        {/* Header */}
        <div className="bg-white p-6 rounded-3xl rounded-bl-none shadow-lg mb-6 flex flex-col md:flex-row justify-between items-center border border-amber-400">
          <h1
            className="text-2xl md:text-3xl font-bold text-green-900 mb-4 md:mb-0"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Cabin Crew <span className="text-amber-400">Videos</span>
          </h1>
          <div className="text-sm text-green-900">Your progress</div>
        </div>

        {/* Introduction */}
        <div className="bg-white p-6 rounded-3xl rounded-bl-none shadow-lg mb-10 border border-amber-400">
          <h2
            className="text-2xl md:text-3xl font-bold text-green-900 mb-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Training Videos for{" "}
            <span className="text-amber-400">Cabin Crew</span>
          </h2>
          <p className="text-green-900 text-base mb-2">
            This section includes training videos that cabin crew can watch
            freely to support their personal development.
          </p>
          <p className="text-green-900 text-sm mb-4">
            The videos do not replace any official and more detailed information
            contained in the Operation Manuals, Boeing FCOMs, and Boeing FCTM or
            other official publications. Where any conflict arises between the
            activities in this section and the contents of the official
            publications, then the information contained in the official
            publications takes precedence.
          </p>
          <p className="text-green-900 text-sm">Videos tested with</p>
        </div>

        {/* Safety Videos */}
        <div className="mb-10">
          <h2
            className="text-xl md:text-2xl font-bold text-green-900 mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Safety <span className="text-amber-400">Videos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safetyVideos.map((video, index) => (
              <Link to={`/videos/${video.title}`} key={index}>
                <div className="bg-white p-4 rounded-3xl rounded-bl-none shadow-lg hover:shadow-xl transition-shadow border border-amber-400">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 text-amber-400 mr-2"
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
                    <span className="text-green-900 font-semibold">
                      {video.title}
                    </span>
                  </div>
                  <span className="text-red-600 text-sm">{video.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SOP & SEP Videos */}
        <div className="mb-10">
          <h2
            className="text-xl md:text-2xl font-bold text-green-900 mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            SOP & <span className="text-amber-400">SEP</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sopAndSepVideos.map((video, index) => (
              <Link to={`/videos/${video.title}`} key={index}>
                <div className="bg-white p-4 rounded-3xl rounded-bl-none shadow-lg hover:shadow-xl transition-shadow border border-amber-400">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 text-amber-400 mr-2"
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
                    <span className="text-green-900 font-semibold">
                      {video.title}
                    </span>
                  </div>
                  <span className="text-red-600 text-sm">{video.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Security Videos */}
        <div className="mb-10">
          <h2
            className="text-xl md:text-2xl font-bold text-green-900 mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Security <span className="text-amber-400">Videos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityVideos.map((video, index) => (
              <Link to={`/videos/${video.title}`} key={index}>
                <div className="bg-white p-4 rounded-3xl rounded-bl-none shadow-lg hover:shadow-xl transition-shadow border border-amber-400">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 text-amber-400 mr-2"
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
                    <span className="text-green-900 font-semibold">
                      {video.title}
                    </span>
                  </div>
                  <span className="text-red-600 text-sm">{video.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Doors and Exits Videos */}
        <div className="mb-10">
          <h2
            className="text-xl md:text-2xl font-bold text-green-900 mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Doors and <span className="text-amber-400">Exits</span> Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doorsAndExitsVideos.map((video, index) => (
              <Link to={`/videos/${video.title}`} key={index}>
                <div className="bg-white p-4 rounded-3xl rounded-bl-none shadow-lg hover:shadow-xl transition-shadow border border-amber-400">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 text-amber-400 mr-2"
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
                    <span className="text-green-900 font-semibold">
                      {video.title}
                    </span>
                  </div>
                  <span className="text-red-600 text-sm">{video.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Customer Experience Videos */}
        <div className="mb-10">
          <h2
            className="text-xl md:text-2xl font-bold text-green-900 mb-6"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Customer Experience <span className="text-amber-400">Videos</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerExperienceVideos.map((video, index) => (
              <Link to={`/videos/${video.title}`} key={index}>
                <div className="bg-white p-4 rounded-3xl rounded-bl-none shadow-lg hover:shadow-xl transition-shadow border border-amber-400">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 text-amber-400 mr-2"
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
                    <span className="text-green-900 font-semibold">
                      {video.title}
                    </span>
                  </div>
                  <span className="text-red-600 text-sm">{video.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesView;
