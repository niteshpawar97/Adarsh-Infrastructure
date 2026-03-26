import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaBolt, FaSolarPanel, FaShieldAlt, FaUsers } from "react-icons/fa";

const stats = [
  { icon: <FaBolt />, value: "15+", label: "Years Experience" },
  { icon: <FaSolarPanel />, value: "500+", label: "Projects Done" },
  { icon: <FaShieldAlt />, value: "A-Class", label: "Govt. Registered" },
  { icon: <FaUsers />, value: "100+", label: "Happy Clients" },
];

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ht-lt-transmission-lines-installation-services.jpg"
          alt="Adarsh Infrastructure - Electrical Projects"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70 sm:via-background/90 sm:to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <FaShieldAlt className="text-[10px] sm:text-xs" />
            A-Class Govt. Registered Contractor
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Powering{" "}
            <span className="text-gold">Madhya Pradesh</span>{" "}
            with Reliable Infrastructure
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expert HT &amp; LT power distribution, transformer installation,
            solar energy solutions, and complete electrification services since 2011.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/services" className="btn-primary text-sm sm:text-base">
              Our Services
            </Link>
            <Link href="/contact" className="btn-outline text-sm sm:text-base">
              Get Free Quote
            </Link>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-xl p-3 sm:p-4 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-primary text-lg sm:text-2xl mb-1 sm:mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
