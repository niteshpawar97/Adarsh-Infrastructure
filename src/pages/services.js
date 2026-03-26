import Head from "next/head";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBolt, FaSolarPanel, FaWrench, FaLightbulb, FaCogs, FaBuilding, FaNetworkWired, FaTools, FaCheckCircle } from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "HT & LT Power Distribution",
    description: "Government-approved High-Tension and Low-Tension power distribution systems, including transformers, control panels, and switchgear for industrial and commercial use.",
    icon: <FaBolt />,
    features: ["132kV Substation Setup", "Power Transformer Installation", "Control Panel & Switchgear", "Load Management Systems"],
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    id: 2,
    name: "Electrical Pole & Line Installation",
    description: "Complete installation of electrical poles, transmission lines, and underground cabling for urban and rural areas with government approvals.",
    icon: <FaNetworkWired />,
    features: ["HT/LT Pole Installation", "Transmission Line Setup", "Underground Cabling", "Aerial Bunched Cables"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    name: "Transformer & DP Installation",
    description: "All types of Distribution Panel and Transformer installations ranging from 25kV to 100kV+ capacity for efficient power distribution.",
    icon: <FaWrench />,
    features: ["25kV - 100kV+ Transformers", "DP Structure Setup", "Step-up/Step-down Units", "Voltage Regulation"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    name: "Street Lighting & Urban Electrification",
    description: "Complete street light installation, LED upgrades, and smart electrification for highways, townships, and industrial areas.",
    icon: <FaLightbulb />,
    features: ["LED Street Lights", "Highway Lighting", "Smart Light Controls", "Township Electrification"],
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    id: 5,
    name: "Solar Power System Installation",
    description: "End-to-end solar power solutions including rooftop solar, ground-mounted systems, and hybrid energy setups with government subsidies.",
    icon: <FaSolarPanel />,
    features: ["Rooftop Solar Systems", "Ground-Mounted Panels", "Hybrid Energy Setup", "Govt. Subsidy Assistance"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 6,
    name: "Automation & Smart Electrical Systems",
    description: "PLC, SCADA, and IoT-based automation solutions for industries, smart city projects, and building management systems.",
    icon: <FaCogs />,
    features: ["PLC Programming", "SCADA Systems", "IoT Integration", "Building Automation"],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 7,
    name: "Rural & Village Electrification",
    description: "Dedicated electrification services for remote villages and rural areas under government schemes like DDUGJY and Saubhagya.",
    icon: <FaBuilding />,
    features: ["DDUGJY Projects", "Saubhagya Scheme", "Village Transformer Setup", "Last-Mile Connectivity"],
    color: "from-teal-500/20 to-green-500/20",
  },
  {
    id: 8,
    name: "Electrical Maintenance & Repair",
    description: "Expert preventive and corrective maintenance services for all types of electrical infrastructure to ensure maximum uptime.",
    icon: <FaTools />,
    features: ["Preventive Maintenance", "Emergency Repairs", "Annual Contracts (AMC)", "Equipment Testing"],
    color: "from-red-500/20 to-orange-500/20",
  },
];

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>Services - Adarsh Infrastructure | Electrical Services in MP</title>
        <meta name="description" content="Complete electrical services: HT & LT power distribution, transformer installation, solar power, automation, and rural electrification in Madhya Pradesh." />
        <meta property="og:title" content="Services - Adarsh Infrastructure" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero */}
      <section className="py-16 sm:py-20 md:py-24 bg-section-gradient text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              Our <span className="text-gold">Services</span>
            </h1>
            <div className="section-divider" />
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Complete electrical infrastructure solutions from power distribution to solar energy and smart automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="card group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl sm:text-2xl flex-shrink-0 group-hover:bg-primary group-hover:text-gray-900 transition-all">
                      {service.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors break-words">{service.name}</h3>
                      <p className="text-gray-400 text-sm mt-1 leading-relaxed break-words">{service.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 sm:mt-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-400 min-w-0">
                        <FaCheckCircle className="text-primary/60 text-xs flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-4 sm:mt-5 hover:underline">
                    Get a Quote <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 bg-section-gradient text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
            Need a <span className="text-gold">Custom Solution?</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">Contact us for a free consultation and detailed project quotation.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Request Quote</Link>
            <Link href="/projects" className="btn-outline">View Projects</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
