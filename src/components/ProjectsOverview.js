import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import projects from "../data/projects";

const ProjectsOverview = () => {
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
          <h2 className="section-heading">Our <span className="text-gold">Projects</span></h2>
          <div className="section-divider" />
          <p className="section-subheading">
            Successfully completed 500+ electrical infrastructure projects across Madhya Pradesh.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group rounded-xl sm:rounded-2xl overflow-hidden bg-card-gradient border border-card-border hover:border-primary/30 transition-all duration-300 hover:shadow-gold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="relative h-44 sm:h-48 lg:h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading={index < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/projects" className="btn-primary">View All Projects</Link>
          <Link href="/work-gallery" className="btn-outline">See Gallery</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsOverview;
