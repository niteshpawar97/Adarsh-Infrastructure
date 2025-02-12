import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-header-gradient text-white p-5 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-white">
          Adarsh Infrastructure
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link href="/" className="hover:text-gray-200 transition duration-300">Home</Link>
          <Link href="/about" className="hover:text-gray-200 transition duration-300">About</Link>
          <Link href="/services" className="hover:text-gray-200 transition duration-300">Services</Link>
          <Link href="/projects" className="hover:text-gray-200 transition duration-300">Projects</Link>
          <Link href="/work-gallery" className="hover:text-gray-200 transition duration-300">Work Gallery</Link>
          <Link href="/contact" className="hover:text-gray-200 transition duration-300">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu - Fixed */}
      <div
        className={`fixed inset-0 z-50 bg-header-gradient bg-opacity-95 flex flex-col items-center justify-center space-y-6 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <XMarkIcon className="h-8 w-8" />
        </button>

        <Link href="/" className="text-xl hover:text-gray-300 transition duration-300" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/about" className="text-xl hover:text-gray-300 transition duration-300" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/services" className="text-xl hover:text-gray-300 transition duration-300" onClick={() => setIsOpen(false)}>Services</Link>
        <Link href="/projects" className="text-xl hover:text-gray-300 transition duration-300" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link href="/work-gallery" className="text-xl hover:text-gray-300 transition duration-300" onClick={() => setIsOpen(false)}>Work Gallery</Link>
        <Link href="/contact" className="text-xl hover:text-gray-300 transition duration-300" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </header>
  );
};

export default Header;
