import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaPhoneAlt } from "react-icons/fa";
import siteConfig from "../data/siteConfig";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/work-gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Top Info Bar - hidden on mobile & tablet */}
      <div className="bg-primary text-gray-900 text-xs sm:text-sm py-1.5 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-medium truncate">A-Class Government Registered Electrical Contractor - MP</span>
          <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-2 font-bold hover:text-gray-700 transition flex-shrink-0">
            <FaPhoneAlt className="text-xs" /> {siteConfig.phone}
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/20 py-2.5 sm:py-3"
          : "bg-background/80 backdrop-blur-sm py-3 sm:py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gold-gradient rounded-lg flex items-center justify-center font-black text-gray-900 text-lg sm:text-xl group-hover:scale-110 transition-transform flex-shrink-0">
              A
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-white block leading-tight">Adarsh</span>
              <span className="text-[10px] sm:text-xs text-primary font-medium tracking-wider uppercase">Infrastructure</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  router.pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="ml-3 px-5 py-2.5 bg-gold-gradient text-gray-900 font-bold rounded-lg text-sm hover:scale-105 transition-transform shadow-gold flex-shrink-0">
              Get Quote
            </Link>
          </nav>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        <div className={`fixed inset-0 z-50 transition-all duration-300 lg:hidden ${
          isOpen ? "visible" : "invisible"
        }`}>
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsOpen(false)}
          />

          <div className={`absolute right-0 top-0 h-full w-72 sm:w-80 max-w-[85vw] bg-background border-l border-card-border shadow-2xl transition-transform duration-300 overflow-y-auto ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}>
            <div className="p-5 sm:p-6">
              <div className="flex justify-between items-center mb-6 sm:mb-8">
                <span className="text-lg font-bold text-primary">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition" aria-label="Close menu">
                  <XMarkIcon className="h-6 w-6 text-white" />
                </button>
              </div>

              <nav className="flex flex-col gap-1.5 sm:gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      router.pathname === link.href
                        ? "text-primary bg-primary/10 border border-primary/20"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 sm:mt-8 space-y-3">
                <Link href="/contact" className="btn-primary w-full block text-center text-sm" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn-outline w-full flex items-center justify-center gap-2 text-sm">
                  <FaPhoneAlt className="text-xs" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
