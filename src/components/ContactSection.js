import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import siteConfig from "../data/siteConfig";

const contactMethods = [
  { icon: <FaPhoneAlt />, title: "Call Us", value: siteConfig.phone, href: `tel:${siteConfig.phoneRaw}`, color: "from-blue-500/20 to-blue-600/20" },
  { icon: <FaWhatsapp />, title: "WhatsApp", value: "Chat with us", href: `https://wa.me/${siteConfig.whatsapp}?text=Hello%20Adarsh%20Infrastructure`, color: "from-green-500/20 to-green-600/20", external: true },
  { icon: <FaEnvelope />, title: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, color: "from-purple-500/20 to-purple-600/20" },
  { icon: <FaMapMarkerAlt />, title: "Visit Office", value: siteConfig.addressShort, href: "/contact", color: "from-orange-500/20 to-orange-600/20" },
];

const ContactSection = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">
              Ready to Start Your <span className="text-gold">Project?</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gold-gradient rounded-full mb-4 sm:mb-6 mx-auto lg:mx-0" />
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              We are here to assist you with all your electrical infrastructure needs.
              Contact us via phone, WhatsApp, or visit our office in Chhindwara.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link href="/contact" className="btn-primary">Get Free Quote</Link>
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn-outline">
                <FaPhoneAlt className="inline mr-2 text-sm" /> Call Now
              </a>
            </div>
          </motion.div>

          {/* Right - Contact Cards */}
          <motion.div
            className="grid grid-cols-2 gap-3 sm:gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="card group text-center hover:shadow-gold-lg"
              >
                <div className={`w-10 h-10 sm:w-14 sm:h-14 mx-auto rounded-lg sm:rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white text-lg sm:text-2xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <h4 className="text-white font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">{method.title}</h4>
                <p className="text-gray-400 text-[10px] sm:text-sm truncate">{method.value}</p>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
