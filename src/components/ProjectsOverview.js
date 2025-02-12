import { motion } from "framer-motion";

const projects = [
  {
    title: "132kV High Voltage Substation Installation",
    description: "Successfully installed and commissioned 132kV substations for industrial and commercial power supply across multiple locations.",
    image: "https://www.swastish.com/image/home/elecrtrical%20substation%20installation.jpg",
  },
  {
    title: "HT & LT Power Line Installation",
    description: "Expert installation of High-Tension (HT) and Low-Tension (LT) power distribution lines with government approvals for rural and urban areas.",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/6/425910570/WG/ZB/TR/59716039/ht-lt-transmission-lines-installation-services.jpg",
  },
  {
    title: "Electrical Pole & Transformer DP Installation",
    description: "Installation of electrical poles, distribution panels (DP), and transformers (25kV, 50kV, 75kV, 100kV) for efficient power distribution.",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/354715302/VD/MR/LA/87558959/double-pole-transformer-structure.jpg",
  },
  {
    title: "Urban & Rural Electrification",
    description: "Complete electrification projects in both urban and rural areas, including government and private sector contracts.",
    image: "https://img.freepik.com/premium-photo/asian-electricians-are-climbing-electric-poles-install-repair-power-lines_416458-552.jpg",
  },
  {
    title: "Street Light & Smart Urban Electrification",
    description: "Installation of smart street lighting, automation, and IoT-based electrical systems for cities, highways, and industrial areas.",
    image: "https://www.wiprolighting.com/media/images/blogpost/image/good-led-street-lighting-fixture-1630315156.jpg",
  },
  {
    title: "Solar Power System Installation",
    description: "End-to-end solar power solutions, including government-approved rooftop, ground-mounted solar setups, and hybrid energy systems.",
    image: "https://2.wlimg.com/product_images/bc-full/2024/3/10618012/solar-power-plant-installation-1709533865-6475809.jpeg",
  },
  // {
  //   title: "Government & Private Sector Electrical Contracts",
  //   description: "Execution of large-scale government-approved electrical projects, including transmission lines, substations, and rural electrification.",
  //   image: "https://mccoymart.com/post/wp-content/webp-express/webp-images/uploads/Electrical-Contractors-McCoy-Mart.jpg.webp",
  // },
];


const ProjectsOverview = () => {
  return (
    <section className="py-16 bg-background text-gray-100 text-center">

      <h3 className="text-4xl font-bold text-primary mb-8">Our Electrical Projects</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-secondary rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-t-xl" />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default ProjectsOverview;

