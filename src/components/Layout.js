import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaWhatsapp, FaArrowUp, FaPhoneAlt } from "react-icons/fa";
import siteConfig from "../data/siteConfig";

const Layout = ({ children }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />

      {/* Mobile Bottom Phone Bar - only on small screens */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary text-gray-900 py-2.5 sm:py-3 px-4 flex justify-center items-center gap-2 lg:hidden shadow-lg">
        <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-2 font-bold text-xs sm:text-sm">
          <FaPhoneAlt className="text-xs" /> Call Now: {siteConfig.phone}
        </a>
      </div>

      {/* Spacer for mobile bottom bar */}
      <div className="h-10 sm:h-12 lg:hidden" />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Adarsh%20Infrastructure%2C%20I%20need%20a%20quote.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-14 sm:bottom-16 lg:bottom-8 right-4 sm:right-6 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 animate-pulse-slow">
          <FaWhatsapp size={22} className="sm:w-[26px] sm:h-[26px]" />
        </div>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
          Chat with us
        </span>
      </a>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-14 sm:bottom-16 lg:bottom-8 left-4 sm:left-6 z-50 bg-card-gradient border border-card-border text-primary p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-primary hover:text-gray-900 transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={14} className="sm:w-4 sm:h-4" />
      </button>
    </div>
  );
};

export default Layout;
