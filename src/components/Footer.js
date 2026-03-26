import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaLinkedin, FaBolt } from "react-icons/fa";
import siteConfig from "../data/siteConfig";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/work-gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "HT & LT Power Distribution",
  "Transformer Installation",
  "Electrical Pole Installation",
  "Solar Power Systems",
  "Street Lighting",
  "Smart Automation",
];

const Footer = () => {
  return (
    <footer className="bg-footer-gradient border-t border-card-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gold-gradient rounded-lg flex items-center justify-center font-black text-gray-900 text-lg sm:text-xl flex-shrink-0">
                A
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold text-white block leading-tight">Adarsh</span>
                <span className="text-[10px] sm:text-xs text-primary font-medium tracking-wider uppercase">Infrastructure</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              A-Class Government Registered Electrical Contractor providing reliable power
              distribution and electrification solutions across Madhya Pradesh since 2011.
            </p>
            {/* Social */}
            <div className="flex gap-2.5 sm:gap-3">
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all" aria-label="WhatsApp">
                <FaWhatsapp size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all" aria-label="Facebook">
                <FaFacebook size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition-all" aria-label="LinkedIn">
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary/50 rounded-full flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-5 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2">
                    <FaBolt className="text-primary/50 text-[8px] flex-shrink-0" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4 sm:mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3 sm:space-y-4">
              <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-start gap-3 text-gray-400 hover:text-primary text-sm transition-colors group">
                <FaPhoneAlt className="text-primary/70 mt-0.5 group-hover:text-primary flex-shrink-0" />
                <span>{siteConfig.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 text-gray-400 hover:text-primary text-sm transition-colors group">
                <FaEnvelope className="text-primary/70 mt-0.5 group-hover:text-primary flex-shrink-0" />
                <span className="break-all">{siteConfig.email}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-primary/70 mt-0.5 flex-shrink-0" />
                <span>Gram Panchayat Rd, Chandangaon,<br />Chhindwara, MP 480001</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 sm:py-5">
          {/* Row 1: Copyright + Policy Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 text-xs text-gray-500">
            <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Adarsh Infrastructure. All Rights Reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="/privacy-policy" className="hover:text-primary transition">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-primary transition">Terms of Service</Link>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-card-border my-3 sm:my-4" />

          {/* Row 2: Credits */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 text-[11px] sm:text-xs text-gray-500">
            <span>
              Designed &amp; Developed by{" "}
              <a href="https://niketgroup.in" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-primary-dark transition">
                Niket Group
              </a>{" "}
              ❤️
            </span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span>
              Powered by{" "}
              <a href="https://niketgroup.in" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-primary-dark transition">
                NiketGroup.in
              </a>{" "}
              Hosting ☁️
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
