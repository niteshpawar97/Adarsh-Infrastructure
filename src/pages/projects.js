import Head from "next/head";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import projects from "../data/projects";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects - Adarsh Infrastructure | Completed Electrical Projects</title>
        <meta name="description" content="Explore Adarsh Infrastructure's 500+ completed electrical projects including HT & LT power distribution, solar energy, and automation solutions." />
        <meta property="og:title" content="Projects - Adarsh Infrastructure" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero */}
      <section className="py-16 sm:py-20 md:py-24 bg-section-gradient text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              Our <span className="text-gold">Projects</span>
            </h1>
            <div className="section-divider" />
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              500+ successfully completed electrical infrastructure projects across Madhya Pradesh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-14 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group rounded-2xl overflow-hidden bg-card-gradient border border-card-border hover:border-primary/30 transition-all duration-300 hover:shadow-gold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="relative h-44 sm:h-48 lg:h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-lg break-words">{project.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <p className="text-gray-400 text-sm leading-relaxed mb-3 sm:mb-4 break-words">{project.description}</p>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:underline">
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
            Want to See More <span className="text-gold">Work?</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">Browse our complete work gallery with 25+ real project photos.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/work-gallery" className="btn-primary">View Gallery</Link>
            <Link href="/contact" className="btn-outline">Get a Quote</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
