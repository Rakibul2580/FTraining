import React from "react";
import { motion } from "framer-motion"; // Import framer-motion // Import Heading from CPD30
import { Link } from "react-router-dom";

// Reusable Heading Component
const Heading = React.memo(({ children }) => (
  <div className="border-4 border-green-700">
    <h1 className="border-green-600 text-green-800 flex items-center justify-center border-4 rounded-tr-2xl rounded-bl-2xl m-1 p-2 text-3xl">
      {children}
    </h1>
  </div>
));

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
const TopicItem = ({ title, dependency, linkText, linkHref }) => (
  <li className="space-y-2">
    <strong className="block text-amber-900">
      <Link to={`/videos/${linkHref}`}>{title}</Link>
    </strong>
    {dependency && (
      <strong className="ml-3 block text-sm text-gray-600">
        Not available unless: The activity{" "}
        <Link to={linkHref} className="text-green-700 underline">
          {linkText}
        </Link>{" "}
        is marked complete
      </strong>
    )}
  </li>
);

// Navigation Links Data
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/Dashboard", label: "My Courses" },
  { href: "/cpd30", label: "CPD30", isActive: true },
];

const CPD30 = () => {
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
            <h1 className="text-xl text-center sm:text-4xl lg:text-5xl font-bold text-green-600">
              Continuous Professional Development{" "}
              <span className="text-amber-400">CPD 30</span>
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
            <Heading>CPD 30 - Continuous Professional Development</Heading>
          </header>
          <h2 className="text-lg font-semibold text-green-700">
            Help with Completion Tick Boxes
          </h2>
          <p className="text-gray-700">
            This training has been created to refresh Cabin Crew members'
            knowledge on Safety.
          </p>
          <p className="text-gray-700">
            This presentation does not replace any official and more detailed
            information contained in the Operation Manuals, Boeing FCOMs, and
            Boeing FCTM or other official publications. Where any conflict
            arises between this guidance and the contents of the official
            publications, then the information contained in the official
            publications takes precedence.
          </p>
          <p className="text-gray-700">
            Once all areas of the course have a "ticked box", the course
            completion will be recorded.
          </p>
          <p className="text-green-900 flex items-center space-x-2">
            <span>Training tested with</span>
            <span className="w-16">
              <img
                src="https://i.ibb.co/VcXNn7SG/chrome.png"
                alt="Chrome browser logo"
              />
            </span>
          </p>
          <p className="text-green-900">
            iPhones running Safari may generate problems with recording training
            completions.
          </p>
        </Section>

        {/* Topic Outline */}
        <Section className="space-y-5">
          <div className="text-sm text-gray-700 space-y-3">
            <header>
              <Heading>Topic Outline SAFETY</Heading>
            </header>
            <ul className="list-disc pl-5 space-y-5">
              <TopicItem
                linkHref="Disruptive Passengers"
                title="CPD30 - Disruptive Passengers"
              />
              <TopicItem
                title="CPD30 - Cabin Secure"
                dependency
                linkText="CPD30 - Disruptive Passengers"
                linkHref="Cabin Secure"
              />
              <TopicItem
                title="CPD30 - CDF PA's"
                dependency
                linkText="CPD30 - Cabin Secure"
                linkHref="CDF PA's"
              />
            </ul>
          </div>
          <div className="text-gray-700 text-sm space-y-5">
            <header>
              <Heading>Topic Outline CUSTOMER SERVICE</Heading>
            </header>
            <ul className="list-disc pl-5 space-y-2">
              <TopicItem
                title="CSAT, POSI and FLEET HUB"
                dependency
                linkText="CPD30 - CDF PA's"
                linkHref="#"
              />
            </ul>
          </div>
          <div className="text-gray-700 text-sm space-y-5">
            <header>
              <Heading>Topic Outline QUIZ</Heading>
            </header>
            <ul className="list-disc pl-5">
              <TopicItem
                title="CPD30 - Quiz"
                dependency
                linkText="CSAT, POSI and FLEET HUB"
                linkHref="#"
              />
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

export default CPD30;
export { Heading };
