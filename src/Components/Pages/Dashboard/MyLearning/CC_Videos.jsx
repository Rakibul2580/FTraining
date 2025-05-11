import React from "react";
import { Heading } from "./CPD30";
import { motion } from "framer-motion"; // Import framer-motion // Import Heading from CPD30

// Reusable NavLink Component
const NavLink = React.memo(({ href, children, isActive }) => (
  <a
    href={href}
    className={`text-green-700 hover:underline ${
      isActive ? "text-green-900 font-bold underline" : ""
    }`}
    aria-current={isActive ? "page" : undefined}
  >
    {children}
  </a>
));

// Reusable Section Component
const Section = ({ children, className = "" }) => (
  <section className={`bg-white p-4 rounded-lg shadow-md ${className}`}>
    {children}
  </section>
);

// Reusable TopicItem Component
const TopicItem = ({ title }) => (
  <li className="space-y-2">
    <strong className="block">{title}</strong>
  </li>
);

// Navigation Links Data for CC_Videos
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/Dashboard", label: "My Courses" },
  { href: "/cc-videos", label: "CC_Videos", isActive: true },
];

const CC_Videos = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="py-10" style={{ fontFamily: "'Georgia', serif" }}>
        <motion.div
          className="relative w-[95%] mx-auto h-[40vh] sm:h-[50vh] lg:h-[50vh] rounded-3xl overflow-hidden" // Added mx-10
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6))`,
            }}
          ></div>
          <img
            src="https://blog.wearskypro.com/wp-content/uploads/2017/05/CREW_SAFETY.jpg"
            alt="About Us"
            className="w-full h-full bg-top object-cover"
            loading="lazy"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-green-600">
              Cabin Crew <span className="text-amber-400">Videos</span>
            </h1>
          </motion.div>
        </motion.div>
      </section>

      {/* Navigation */}
      <nav className="flex justify-start space-x-6 p-4 bg-green-50">
        {navLinks.map((link) => (
          <NavLink key={link.href} href={link.href} isActive={link.isActive}>
            {link.label} /
          </NavLink>
        ))}
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Help Section */}
        <Section className="space-y-3 mb-6">
          <header>
            <Heading>Cabin Crew Videos</Heading>
          </header>
          <h2 className="text-lg font-semibold text-green-700">
            Help with Completion Tick Boxes
          </h2>
          <p className="text-gray-700">
            This section includes training videos that cabin crew can watch
            freely to support their personal development.
          </p>
          <p className="text-gray-700">
            The videos do not replace any official and more detailed information
            contained in the Operation Manuals, Boeing FCOMs, and Boeing FCTM or
            other official publications. Where any conflict arises between the
            activities in this section and the contents of the official
            publications, then the information contained in the official
            publications takes precedence.
          </p>
          <p className="text-green-900 flex items-center space-x-2">
            <span>Videos tested with</span>
            <span className="w-16">
              <img
                src="https://i.ibb.co/VcXNn7SG/chrome.png"
                alt="Chrome browser logo"
              />
            </span>
          </p>
        </Section>

        {/* Topic Outline */}
        <Section className="space-y-5">
          {/* Safety Videos - First Aid */}
          <div className="text-sm text-gray-700 space-y-3">
            <header>
              <Heading>Safety Videos - First Aid</Heading>
            </header>
            <ul className="list-disc pl-5 space-y-5">
              <TopicItem title="  ABCDE - Universal Approach" />
              <TopicItem title="  PAA - First Aid" />
              <TopicItem title="  Red FAK" />
              <TopicItem title="  PAA - Fire" />
              <TopicItem title="  Burns and Scalds" />
              <TopicItem title="  Asthma" />
              <TopicItem title="  CPR+AED" />
            </ul>
          </div>

          {/* SOP & SEP */}
          <div className="text-sm text-gray-700 space-y-3">
            <header>
              <Heading>SOP & SEP</Heading>
            </header>
            <ul className="list-disc pl-5 space-y-5">
              <TopicItem title="  Fire Proof Gash Bag" />
              <TopicItem title="  8200 Differences" />
              <TopicItem title="  Briefing - Do's and Don't" />
              <TopicItem title="  Safety Office notifications" />
              <TopicItem title="  Safety Alerts" />
              <TopicItem title="  Use of English" />
              <TopicItem title="  Use of onboard facilities" />
              <TopicItem title="  Bag left unattended" />
              <TopicItem title="  Docunet" />
              <TopicItem title="  Go Around" />
              <TopicItem title="  Brace Position" />
              <TopicItem title="  NITS" />
              <TopicItem title="  Offloading a cabin bag" />
              <TopicItem title="  SOS Demo - Land" />
              <TopicItem title="  SOS Demo - Water" />
              <TopicItem title="  Serving Hot Drinks and Hot Meals" />
              <TopicItem title="  Cabin Secure" />
              <TopicItem title="  Flight Deck observer jumpseat" />
              <TopicItem title="  G4 Right" />
              <TopicItem title="  vPos update and Docunet" />
              <TopicItem title="  End of duty" />
              <TopicItem title="  Pilot seat" />
              <TopicItem title="  Flight Deck" />
              <TopicItem title="  G4 Right Hand Side" />
              <TopicItem title="  G4 Left Hand Side" />
            </ul>
          </div>

          {/* Security */}
          <div className="text-sm text-gray-700 space-y-3">
            <header>
              <Heading>Security</Heading>
            </header>
            <ul className="list-disc pl-5 space-y-5">
              <TopicItem title="Dpax" />
              <TopicItem title="Challenging for ID" />
              <TopicItem title="Monitoring of the FC outside the Flight Deck" />
              <TopicItem title="Flight Deck door" />
              <TopicItem title="Security checks during crew change" />
            </ul>
          </div>

          {/* Doors and Exits */}
          <div className="text-sm text-gray-700 space-y-3">
            <header>
              <Heading>Doors and Exits</Heading>
            </header>
            <ul className="list-disc pl-5 space-y-5">
              <TopicItem title="Arming and disarming slides" />
              <TopicItem title="Disarming Procedures" />
              <TopicItem title="Airstairs operation" />
              <TopicItem title="Door closing procedure" />
              <TopicItem title="Overwing exits description" />
              <TopicItem title="Overwing exit briefing" />
            </ul>
          </div>

          {/* Customer Service Videos */}
          <div className="text-sm text-gray-700 space-y-3">
            <header>
              <Heading>Customer Service Videos</Heading>
            </header>
            <ul className="list-disc pl-5 space-y-5">
              <TopicItem title="  Crew Water Procedure">
                <span>Not completed: Crew Water Procedure</span>
              </TopicItem>
              <TopicItem title="  OTS">
                <span>Not completed: OTS</span>
              </TopicItem>
              <TopicItem title="  Magazine distribution">
                <span>Not completed: Magazine distribution</span>
              </TopicItem>
              <TopicItem title="  First name not provided">
                <span>Not completed: First name not provided</span>
              </TopicItem>
              <TopicItem title="  PA's">
                <span>Not completed: PA's</span>
              </TopicItem>
            </ul>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center p-3">
        <p>© 2025 Ryanair DAC. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default CC_Videos;
