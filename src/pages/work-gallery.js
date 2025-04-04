import Head from "next/head";
import Layout from "../components/Layout";
import Image from 'next/image';

const projects = [
  {
    title: "132kV High Voltage Substation Installation",
    image: "/images/elecrtrical-substation-installation.jpg",
  },
  {
    title: "HT & LT Power Line Installation",
    image: "/images/ht-lt-transmission-lines-installation-services.jpg",
  },
  {
    title: "Electrical Pole & Transformer DP Installation",
    image: "/images/double-pole-transformer-structure.jpg",
  
  },
  {
    title: "Urban & Rural Electrification",
    image: "/images/electricians-are-climbing-electric-poles-install-repair.jpg",
  },
  {
    title: "Street Light & Smart Urban Electrification",
    image: "/images/street-lighting.jpg",
  },
  {
    title: "Solar Power System Installation",
    image: "/images/solar-power-plant-installation.jpeg",
  },
];

export default function WorkGallery() {
  return (
    <Layout>
      <Head>
        <title>Work Gallery - Adarsh Infrastructure</title>
        <meta name="description" content="View our completed electrical projects, including HT & LT power distribution, transformer installations, and smart electrification." />
      </Head>

      <main className="py-20 px-8 text-white max-w-7xl mx-auto bg-gradient-to-b from-background to-secondary rounded-2xl shadow-xl">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-primary mb-6 text-center">
          Work Gallery
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
          Explore our successfully completed projects in **power distribution, electrification, street lighting, and automation**.
        </p>

        {/* Image Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background rounded-xl shadow-lg overflow-hidden">
              <Image 
              src={project.image} 
              alt={project.title} 
              
              width={600}  // ✅ Image Width Set
              height={400} // ✅ Image Height Set 
              className="w-full h-64 object-cover hover:scale-105 transition duration-300" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
