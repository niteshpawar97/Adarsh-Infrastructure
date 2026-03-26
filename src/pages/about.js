import Head from "next/head";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaBolt, FaBuilding, FaTools, FaShieldAlt, FaClock, FaUsers, FaAward, FaSolarPanel } from "react-icons/fa";

const milestones = [
  { year: "2011", title: "Company Founded", desc: "Started as an electrical contracting firm in Chhindwara, MP." },
  { year: "2014", title: "A-Class Registration", desc: "Received A-Class Government Electrical Contractor license from MP Govt." },
  { year: "2017", title: "500+ Poles Installed", desc: "Completed major rural electrification projects across multiple districts." },
  { year: "2020", title: "Solar Division Launch", desc: "Expanded into solar power installations for industries and homes." },
  { year: "2024", title: "500+ Projects", desc: "Successfully completed over 500 electrical infrastructure projects." },
];

const values = [
  { icon: <FaShieldAlt />, title: "Safety First", desc: "Every project follows strict government safety standards." },
  { icon: <FaAward />, title: "Quality Work", desc: "Premium materials and expert craftsmanship in every project." },
  { icon: <FaClock />, title: "On-Time Delivery", desc: "We complete projects within the committed timeline." },
  { icon: <FaUsers />, title: "Client Focused", desc: "Custom solutions tailored to each client's requirements." },
];

const expertise = [
  { icon: <FaBolt />, title: "HT & LT Distribution", desc: "Government-approved power distribution systems." },
  { icon: <FaBuilding />, title: "Transformer & DP", desc: "25kV to 100kV+ transformer and DP installation." },
  { icon: <FaSolarPanel />, title: "Solar Power", desc: "Rooftop, ground-mounted, and hybrid solar solutions." },
  { icon: <FaTools />, title: "Smart Automation", desc: "PLC, SCADA, and IoT-based automation systems." },
];

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us - Adarsh Infrastructure | Since 2011</title>
        <meta name="description" content="Learn about Adarsh Infrastructure - A-Class Government Registered Electrical Contractor in Chhindwara, MP with 15+ years of experience." />
        <meta property="og:title" content="About - Adarsh Infrastructure" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Banner */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/elecrtrical-substation-installation.jpg"
            alt="About Adarsh Infrastructure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <FaShieldAlt className="text-xs" /> Since 2011
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              About <span className="text-gold">Adarsh Infrastructure</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed break-words">
              An <strong>A-Class Government Registered Electrical Contractor</strong> based in
              Chhindwara, Madhya Pradesh. We specialize in HT &amp; LT power distribution,
              transformer installations, solar energy, and complete electrification solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-14 sm:py-16 lg:py-20 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="section-heading">Our <span className="text-gold">Values</span></h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {values.map((item, index) => (
              <motion.div
                key={index}
                className="card text-center group overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-xl sm:text-2xl mx-auto mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-gray-900 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="section-heading">Our <span className="text-gold">Journey</span></h2>
            <div className="section-divider" />
          </motion.div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-px bg-card-border md:-translate-x-px" />

            {milestones.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-start gap-4 sm:gap-6 mb-8 sm:mb-10 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Content */}
                <div className={`flex-1 min-w-0 ml-10 sm:ml-14 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <div className="card overflow-hidden">
                    <span className="text-primary font-extrabold text-xl sm:text-2xl">{item.year}</span>
                    <h3 className="text-white font-bold text-base sm:text-lg mt-1 break-words">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-2 break-words">{item.desc}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 sm:left-6 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-8 ring-4 ring-background" />

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-14 sm:py-16 lg:py-20 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="section-heading">Our <span className="text-gold">Expertise</span></h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                className="card text-center group overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl sm:text-2xl mx-auto mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-gray-900 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-2 break-words">{item.title}</h3>
                <p className="text-gray-400 text-sm break-words">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10 sm:mt-12">
            <Link href="/contact" className="btn-primary">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
