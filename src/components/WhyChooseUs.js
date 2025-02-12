import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const features = [
  "A-Class Government-Registered Electrical Contractor (MP Govt.)",
  "Expert in HT & LT Power Distribution & Transformer Installations",
  "Installation of Electrical Poles & Transmission Lines in Urban & Rural Areas",
  "Dedicated Electrification Services for Villages & Remote Areas",
  "All Types of DP Installation with Transformer (25kV, 50kV, 75kV, 100kV+)",
  "Smart Street Lighting & Urban Electrification Solutions",
  "Energy-Efficient Solar Power & Backup Solutions for Industries & Homes",
  "Strict Compliance with Government Safety & Quality Regulations",
  "Timely Execution of Government & Private Electrical Contracts",
  // "24/7 Maintenance & Reliable Customer Support for Electrical Infrastructure",
];


const WhyChooseUs = () => {
  return (
    <section className="bg-background text-gray-900 py-12 px-6">
      <h3 className="text-4xl font-bold text-primary text-center">Why Choose Adarsh Infrastructure?</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4 bg-secondary p-5 rounded-lg shadow-md border-l-4 border-primary transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <CheckCircleIcon className="h-8 w-8 text-green-500" />
            <span className="text-lg text-foreground font-semibold">{feature}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
