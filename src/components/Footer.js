const Footer = () => {
  return (
    <footer className="bg-footer-bg text-footer-text py-6 px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left w-full shadow-lg">
      <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Adarsh Infrastructure. All Rights Reserved.</p>
      <div className="mt-4 md:mt-0 flex space-x-6">
        <a href="/privacy-policy" className="hover:text-footer-hover transition">Privacy Policy</a>
        <a href="/terms-of-service" className="hover:text-footer-hover transition">Terms of Service</a>
        <a href="/contact" className="hover:text-footer-hover transition">Contact Us</a>
      </div>
    </footer>

  );
};

export default Footer;
