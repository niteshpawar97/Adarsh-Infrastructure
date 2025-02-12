import Head from "next/head";
import Layout from "../components/Layout";
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
];

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects - Adarsh Infrastructure</title>
        <meta name="description" content="Explore Adarsh Infrastructure's completed electrical projects, including HT & LT power distribution, solar energy, and automation solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="py-20 px-8 text-center bg-gradient-to-b from-background to-secondary text-white max-w-6xl mx-auto rounded-2xl shadow-xl">
        
        {/* Page Heading */}
        <h2 className="text-5xl font-extrabold text-primary mb-6">Our Electrical Projects</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Take a look at our successfully completed **electrical projects, including substation installations, solar power setups, and industrial power distribution systems.**
        </p>

        {/* Projects Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col justify-between h-full transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-t-xl" />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-semibold text-primary">{project.title}</h3>
                  <p className="text-gray-300 mt-2">{project.description}</p>
                </div>
                <button className="mt-4 px-6 py-2 bg-primary text-gray-900 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
