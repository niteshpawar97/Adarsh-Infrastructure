import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-auto flex flex-col justify-center items-center text-center px-6 bg-background text-foreground py-20">
      <div className="max-w-4xl mx-auto">
        {/* Heading Animation */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Adarsh Infrastructure
        </motion.h2>

        {/* Subtext Animation */}
        <motion.p
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A-Class Government Registered Electrical Contractor providing high-quality electrical
          solutions for residential, commercial, and industrial projects since 2011.
        </motion.p>

        {/* Buttons Animation */}
        <motion.div
          className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* Learn More Button */}
          <Link href="/about">
            <button className="px-6 py-3 bg-primary text-secondary font-semibold rounded-full hover:bg-primary-dark transition duration-300">
              Learn More
            </button>
          </Link>

          {/* Contact Us Button */}
          <Link href="/contact">
            <button className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition duration-300">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
