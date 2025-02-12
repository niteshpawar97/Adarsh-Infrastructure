import Head from "next/head";
import Layout from "../components/Layout";
import { FaBolt, FaSolarPanel, FaWrench, FaLightbulb, FaCogs, FaBuilding } from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "Electrical Pole & Line Installation",
    description: "Expert installation of electrical poles and transmission lines for urban and rural electrification projects.",
    icon: <FaBolt className="text-5xl text-primary" />,
  },
  {
    id: 2,
    name: "HT & LT Power Distribution",
    description: "Government-approved HT & LT power distribution, including transformers and control panels.",
    icon: <FaWrench className="text-5xl text-primary" />,
  },
  {
    id: 3,
    name: "Street Lighting & Urban Electrification",
    description: "Complete street light installation and maintenance for highways, townships, and industrial areas.",
    icon: <FaLightbulb className="text-5xl text-primary" />,
  },
  {
    id: 4,
    name: "Solar Power System Installation",
    description: "End-to-end solar power solutions, including government-approved rooftop and ground-mounted solar setups.",
    icon: <FaSolarPanel className="text-5xl text-primary" />,
  },
  {
    id: 5,
    name: "Automation & Smart Electrical Systems",
    description: "PLC, SCADA, and IoT-based automation solutions for industries and smart city projects.",
    icon: <FaCogs className="text-5xl text-primary" />,
  },
  {
    id: 6,
    name: "Government & Private Electrical Contracts",
    description: "MP Government A-Class Electrical Contractor specializing in public and private sector electrification projects.",
    icon: <FaBuilding className="text-5xl text-primary" />,
  },
];


export default function Services() {
  return (
    <Layout>
      <Head>
        <title>Services - Adarsh Infrastructure</title>
        <meta name="description" content="Explore Adarsh Infrastructure's electrical services, including HT & LT power distribution, solar solutions, and automation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="py-20 px-8 text-center bg-gradient-to-b from-background to-secondary text-white max-w-6xl mx-auto rounded-2xl shadow-xl">
        
        {/* Page Heading */}
        <h2 className="text-5xl font-extrabold text-primary mb-6">Our Electrical Services</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We specialize in **HT & LT power distribution, solar installations, automation, and industrial electrical solutions.**  
        </p>

       {/* Services Grid */}
       <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-background p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mt-4">{service.name}</h3>
                <p className="text-gray-300 mt-2">{service.description}</p>
              </div>
              <button className="mt-4 px-6 py-2 bg-primary text-gray-900 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105">
                Get a Quote
              </button>
            </div>
          ))}
        </div>
        </main>

    </Layout>
  );
}
