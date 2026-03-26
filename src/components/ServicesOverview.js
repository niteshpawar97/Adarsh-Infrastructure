import { motion } from "framer-motion";
import Link from "next/link";
import { FaBolt, FaSolarPanel, FaToolbox, FaPlug, FaNetworkWired, FaCity } from "react-icons/fa";

const services = [
  { id: 1, name: "HT & LT Power Distribution", icon: <FaBolt />, description: "Government-approved HT & LT power distribution, including transformers and control panels for industries and cities.", color: "from-yellow-500/20 to-orange-500/20" },
  { id: 2, name: "Electrical Pole & Line Installation", icon: <FaNetworkWired />, description: "Installation of electrical poles, transmission lines, and underground cabling for efficient power distribution.", color: "from-blue-500/20 to-cyan-500/20" },
  { id: 3, name: "Street Light & Urban Electrification", icon: <FaCity />, description: "Complete street light installation and smart electrification for highways, industrial zones, and urban areas.", color: "from-purple-500/20 to-pink-500/20" },
  { id: 4, name: "Solar Power System Installation", icon: <FaSolarPanel />, description: "End-to-end solar power solutions, including government-approved rooftop and ground-mounted solar setups.", color: "from-green-500/20 to-emerald-500/20" },
  { id: 5, name: "Automation & Smart Systems", icon: <FaPlug />, description: "PLC, SCADA, and IoT-based automation solutions for industries and smart city projects.", color: "from-cyan-500/20 to-blue-500/20" },
  { id: 6, name: "Electrical Maintenance & Repair", icon: <FaToolbox />, description: "Expert maintenance and repair solutions for industrial, commercial, and residential electrical systems.", color: "from-red-500/20 to-orange-500/20" },
];

const ServicesOverview = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="section-heading">Our <span className="text-gold">Services</span></h2>
          <div className="section-divider" />
          <p className="section-subheading">
            Complete electrical infrastructure solutions for government, industrial, commercial, and residential projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="card group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl`} />
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center text-primary text-xl sm:text-2xl mb-4 sm:mb-5 group-hover:bg-primary group-hover:text-gray-900 transition-all duration-300">
                  {service.icon}
                </div>
                <h4 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">{service.name}</h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{service.description}</p>
                <Link href="/services" className="text-primary text-xs sm:text-sm font-semibold hover:underline inline-flex items-center gap-1">
                  Learn More <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/services" className="btn-outline">View All Services</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
