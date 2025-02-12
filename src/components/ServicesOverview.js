import { FaBolt, FaSolarPanel, FaToolbox, FaPlug, FaNetworkWired, FaCity } from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "HT & LT Power Distribution",
    icon: <FaBolt />,
    description: "Government-approved HT & LT power distribution, including transformers and control panels for industries and cities.",
  },
  {
    id: 2,
    name: "Electrical Pole & Line Installation",
    icon: <FaNetworkWired />,
    description: "Installation of electrical poles, transmission lines, and underground cabling for efficient power distribution.",
  },
  {
    id: 3,
    name: "Street Light & Urban Electrification",
    icon: <FaCity />,
    description: "Complete street light installation and smart electrification for highways, industrial zones, and urban areas.",
  },
  {
    id: 4,
    name: "Solar Power System Installation",
    icon: <FaSolarPanel />,
    description: "End-to-end solar power solutions, including government-approved rooftop and ground-mounted solar setups.",
  },
  {
    id: 5,
    name: "Automation & Smart Electrical Systems",
    icon: <FaPlug />,
    description: "PLC, SCADA, and IoT-based automation solutions for industries and smart city projects.",
  },
  {
    id: 6,
    name: "Electrical Maintenance & Repair",
    icon: <FaToolbox />,
    description: "Expert maintenance and repair solutions for industrial, commercial, and residential electrical systems.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-secondary text-white text-center">
      <h3 className="text-4xl font-bold text-primary">Our Electrical Services</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-6">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center text-center"
          >
            {/* Mobile View: Center Icon */}
            <div className="text-5xl text-primary mb-4 flex justify-center w-full">
              {service.icon}
            </div>
            
            <h4 className="text-xl font-semibold">{service.name}</h4>
            <p className="mt-2 text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
