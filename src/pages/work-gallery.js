import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import { motion } from "framer-motion";
import galleryImages from "../data/galleryImages";

const categories = [
  { key: "all", label: "All" },
  { key: "electrification", label: "Electrification" },
  { key: "transmission", label: "HT/LT Lines" },
  { key: "transformer", label: "Transformer" },
  { key: "substation", label: "Substation" },
  { key: "solar", label: "Solar" },
  { key: "street-light", label: "Street Light" },
];

export default function WorkGallery() {
  const [lightbox, setLightbox] = useState(null);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((p) => (p < filtered.length - 1 ? p + 1 : 0));
      if (e.key === "ArrowLeft") setLightbox((p) => (p > 0 ? p - 1 : filtered.length - 1));
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [lightbox, filtered.length]);

  return (
    <Layout>
      <Head>
        <title>Work Gallery - Adarsh Infrastructure | Project Photos</title>
        <meta name="description" content="Browse 25+ photos of completed electrical infrastructure projects by Adarsh Infrastructure in Chhindwara, MP." />
        <meta property="og:title" content="Gallery - Adarsh Infrastructure" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero */}
      <section className="py-16 sm:py-20 md:py-24 bg-section-gradient text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              Work <span className="text-gold">Gallery</span>
            </h1>
            <div className="section-divider" />
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Real photos from our completed electrical infrastructure projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 sm:py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => { setFilter(cat.key); setLightbox(null); }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  filter === cat.key
                    ? "bg-gold-gradient text-gray-900 shadow-gold"
                    : "bg-card-gradient border border-card-border text-gray-400 hover:text-white hover:border-primary/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <p className="text-center text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8">
            {filtered.length} photos
          </p>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {filtered.map((project, index) => (
              <motion.div
                key={`${filter}-${index}`}
                className="group cursor-pointer rounded-lg sm:rounded-xl overflow-hidden bg-card-gradient border border-card-border hover:border-primary/30 transition-all duration-300 hover:shadow-gold"
                onClick={() => setLightbox(index)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading={index < 8 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-2xl sm:text-3xl opacity-0 group-hover:opacity-100 transition-opacity">&#8599;</span>
                  </div>
                </div>
                <div className="p-2 sm:p-3">
                  <p className="text-xs text-gray-400 font-medium truncate">{project.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 sm:-top-12 right-0 text-gray-400 text-sm font-medium hover:text-white transition flex items-center gap-2"
              onClick={() => setLightbox(null)}
            >
              Close <span className="text-xl">&times;</span>
            </button>

            <div className="relative flex items-center justify-center">
              <Image
                src={filtered[lightbox].image}
                alt={filtered[lightbox].title}
                width={1200}
                height={800}
                className="max-h-[65vh] sm:max-h-[75vh] w-auto mx-auto rounded-lg sm:rounded-xl object-contain"
              />
            </div>

            <div className="mt-3 sm:mt-4 flex justify-between items-center gap-2">
              <button
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition flex-shrink-0"
                onClick={() => setLightbox((p) => (p > 0 ? p - 1 : filtered.length - 1))}
                aria-label="Previous"
              >&#8592;</button>

              <div className="text-center min-w-0">
                <p className="text-white font-medium text-sm sm:text-base truncate">{filtered[lightbox].title}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{lightbox + 1} / {filtered.length}</p>
              </div>

              <button
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition flex-shrink-0"
                onClick={() => setLightbox((p) => (p < filtered.length - 1 ? p + 1 : 0))}
                aria-label="Next"
              >&#8594;</button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
