import { motion } from "framer-motion";
import { FaShieldAlt, FaBolt, FaSolarPanel, FaCogs, FaClock, FaAward, FaMapMarkedAlt, FaHandshake, FaTools } from "react-icons/fa";

const features = [
  { icon: <FaShieldAlt />, title: "A-Class Registered", desc: "Government Registered Electrical Contractor under MP Govt." },
  { icon: <FaBolt />, title: "HT & LT Expert", desc: "Specialized in High-Tension & Low-Tension power distribution." },
  { icon: <FaMapMarkedAlt />, title: "Rural & Urban", desc: "Electrification services for villages, cities & industrial zones." },
  { icon: <FaCogs />, title: "DP & Transformer", desc: "All types of DP installation with Transformer (25kV to 100kV+)." },
  { icon: <FaSolarPanel />, title: "Solar Power", desc: "Energy-efficient solar solutions for industries & homes." },
  { icon: <FaClock />, title: "Timely Execution", desc: "On-time project delivery for government & private contracts." },
  { icon: <FaAward />, title: "Quality Assured", desc: "Strict compliance with safety & quality regulations." },
  { icon: <FaHandshake />, title: "Trusted Partner", desc: "15+ years of trusted electrical infrastructure services." },
  { icon: <FaTools />, title: "Complete Solutions", desc: "From street lighting to smart automation systems." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="section-heading">
            Why Choose <span className="text-gold">Adarsh Infrastructure?</span>
          </h2>
          <div className="section-divider" />
          <p className="section-subheading">
            With 15+ years of expertise, we deliver world-class electrical infrastructure across Madhya Pradesh.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card flex items-start gap-3 sm:gap-4 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center text-primary text-lg sm:text-xl flex-shrink-0 group-hover:bg-primary group-hover:text-gray-900 transition-all duration-300">
                {feature.icon}
              </div>
              <div className="min-w-0">
                <h4 className="text-white font-bold text-base sm:text-lg mb-0.5 sm:mb-1">{feature.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
