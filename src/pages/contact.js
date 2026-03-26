import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from "react-icons/fa";
import siteConfig from "../data/siteConfig";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneRaw}`,
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    value: "Chat with us",
    href: `https://wa.me/${siteConfig.whatsapp}`,
    color: "from-green-500/20 to-green-600/20",
    external: true,
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    value: "Mon - Sat: 9 AM - 7 PM",
    color: "from-orange-500/20 to-orange-600/20",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus("error");
      return;
    }
    const phoneRegex = /^[+]?[\d\s-]{10,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      setStatus("error");
      return;
    }

    const msg = `*New Inquiry - Adarsh Infrastructure*%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email || "N/A"}%0AService: ${formData.service || "General Inquiry"}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${msg}`, "_blank", "noopener,noreferrer");
    setStatus("sent");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <Layout>
      <Head>
        <title>Contact Us - Adarsh Infrastructure | Get a Free Quote</title>
        <meta name="description" content="Contact Adarsh Infrastructure for electrical project quotes, consultations, and services in Chhindwara, MP." />
        <meta property="og:title" content="Contact - Adarsh Infrastructure" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero */}
      <section className="py-16 sm:py-20 md:py-24 bg-section-gradient text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              Contact <span className="text-gold">Us</span>
            </h1>
            <div className="section-divider" />
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Get in touch for free consultations, project quotations, or any inquiries about our electrical services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 sm:py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 -mt-14 sm:-mt-16 relative z-10">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="card text-center block hover:shadow-gold-lg overflow-hidden"
                  >
                    <div className={`w-10 h-10 sm:w-14 sm:h-14 mx-auto rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-lg sm:text-2xl mb-2 sm:mb-3`}>
                      {item.icon}
                    </div>
                    <h3 className="text-white font-bold text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm truncate">{item.value}</p>
                  </a>
                ) : (
                  <div className="card text-center overflow-hidden">
                    <div className={`w-10 h-10 sm:w-14 sm:h-14 mx-auto rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-lg sm:text-2xl mb-2 sm:mb-3`}>
                      {item.icon}
                    </div>
                    <h3 className="text-white font-bold text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm truncate">{item.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-14 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Form */}
            <motion.div
              className="card p-4 sm:p-6 lg:p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Send Us a Message</h2>
              <p className="text-gray-400 text-sm mb-4 sm:mb-6">Fill the form and we&apos;ll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} noValidate className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text" name="name" placeholder="Your Name *"
                    value={formData.name} onChange={handleChange}
                    className="w-full p-3 sm:p-3.5 rounded-xl bg-background border border-card-border text-white placeholder-gray-500 outline-none focus:border-primary transition text-sm"
                    required maxLength={100}
                  />
                  <input
                    type="tel" name="phone" placeholder="Phone Number *"
                    value={formData.phone} onChange={handleChange}
                    className="w-full p-3 sm:p-3.5 rounded-xl bg-background border border-card-border text-white placeholder-gray-500 outline-none focus:border-primary transition text-sm"
                    required maxLength={15}
                  />
                </div>
                <input
                  type="email" name="email" placeholder="Email (Optional)"
                  value={formData.email} onChange={handleChange}
                  className="w-full p-3 sm:p-3.5 rounded-xl bg-background border border-card-border text-white placeholder-gray-500 outline-none focus:border-primary transition text-sm"
                  maxLength={150}
                />
                <select
                  name="service" value={formData.service} onChange={handleChange}
                  className="w-full p-3 sm:p-3.5 rounded-xl bg-background border border-card-border text-gray-400 outline-none focus:border-primary transition text-sm"
                >
                  <option value="">Select Service (Optional)</option>
                  <option value="HT & LT Power Distribution">HT &amp; LT Power Distribution</option>
                  <option value="Transformer Installation">Transformer &amp; DP Installation</option>
                  <option value="Solar Power">Solar Power Installation</option>
                  <option value="Street Lighting">Street Lighting</option>
                  <option value="Automation">Smart Automation</option>
                  <option value="Rural Electrification">Rural Electrification</option>
                  <option value="Maintenance">Maintenance &amp; Repair</option>
                  <option value="Other">Other</option>
                </select>
                <textarea
                  name="message" placeholder="Describe your project requirements *"
                  rows="4" value={formData.message} onChange={handleChange}
                  className="w-full p-3 sm:p-3.5 rounded-xl bg-background border border-card-border text-white placeholder-gray-500 outline-none focus:border-primary transition text-sm resize-none"
                  required maxLength={1000}
                />

                {status === "error" && <p className="text-red-400 text-sm">Please fill all required fields with valid information.</p>}
                {status === "sent" && <p className="text-green-400 text-sm">Message sent via WhatsApp! We&apos;ll respond shortly.</p>}

                <button type="submit" className="btn-primary w-full">
                  Send via WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Map + Address */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-card-border h-60 sm:h-72 lg:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.5!2d78.9382!3d22.0574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDAzJzI2LjciTiA3OMKwNTYnMTcuNSJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                  title="Adarsh Infrastructure Office Location"
                />
              </div>

              {/* Address Card */}
              <div className="card overflow-hidden">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-lg sm:text-xl flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1">Office Address</h3>
                    <p className="text-gray-400 text-sm leading-relaxed break-words">
                      Gram Panchayat Rd, Chandangaon,<br />
                      Chhindwara, Madhya Pradesh 480001, India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
