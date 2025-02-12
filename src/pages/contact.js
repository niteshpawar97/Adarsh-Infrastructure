import Head from "next/head";
import Layout from "../components/Layout";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact - Adarsh Infrastructure</title>
        <meta name="description" content="Get in touch with Adarsh Infrastructure for electrical solutions, projects, and support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="py-20 px-8 text-center bg-gradient-to-b from-background to-secondary text-white max-w-5xl mx-auto rounded-2xl shadow-xl">
        
        {/* Main Heading */}
        <h2 className="text-5xl font-extrabold text-primary mb-6">Contact Us</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Reach out to us for **electrical solutions, projects, and consultations**. We are here to assist you with the best services.
        </p>

        {/* Contact Details */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-gray-300">
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-3xl text-primary mb-3" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="mt-2">
              <a href="tel:+918889741005" className="hover:text-primary transition">+91 88897 41005</a>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaEnvelope className="text-3xl text-primary mb-3" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="mt-2">
              <a href="mailto:info@adarshinfra.com" className="hover:text-primary transition">info@adarshinfra.com</a>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-3xl text-primary mb-3" />
            <h3 className="text-xl font-semibold">Office Address</h3>
            <p className="mt-2">
              Gram Panchayat Rd, Chandangaon,<br />
              Chhindwara, Madhya Pradesh 480001
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-background p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-primary">Send Us a Message</h3>
          <form className="mt-6 flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-primary" required />
            <input type="email" placeholder="Your Email" className="p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-primary" required />
            <textarea placeholder="Your Message" rows="4" className="p-3 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-primary" required></textarea>
            <button type="submit" className="px-6 py-3 bg-primary text-gray-900 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-10 flex justify-center space-x-6">
          <a href="https://www.facebook.com" target="_blank" className="text-gray-400 hover:text-primary transition">
            <FaFacebook size={28} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" className="text-gray-400 hover:text-primary transition">
            <FaLinkedin size={28} />
          </a>
          <a href="https://www.twitter.com" target="_blank" className="text-gray-400 hover:text-primary transition">
            <FaTwitter size={28} />
          </a>
        </div>
      </main>
    </Layout>
  );
}
