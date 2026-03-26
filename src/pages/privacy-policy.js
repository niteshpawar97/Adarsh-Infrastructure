import Head from "next/head";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    title: "1. Information We Collect",
    content: "We may collect personal information including your name, email address, phone number, billing details, and project requirements when you contact us, request a quote, or use our services.",
  },
  {
    title: "2. How We Use Your Information",
    content: "Your data is used for service delivery, project communication, billing, customer support, and compliance with legal requirements. We do not sell or rent your personal data to third parties.",
  },
  {
    title: "3. Data Security",
    content: "We implement industry-standard security measures to protect your data. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "4. Cookies & Tracking",
    content: "We use cookies to enhance your website experience, analyze site traffic, and improve our services. You can manage cookie settings in your browser preferences at any time.",
  },
  {
    title: "5. Third-Party Services",
    content: "We may use third-party services (such as analytics tools) that collect, monitor, and analyze website usage. These third-party service providers have their own privacy policies.",
  },
  {
    title: "6. Your Rights",
    content: "You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us using the details provided below.",
  },
];

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - Adarsh Infrastructure</title>
        <meta name="description" content="Read our Privacy Policy to understand how we collect, use, and protect your personal information." />
      </Head>

      {/* Hero */}
      <section className="py-14 sm:py-16 lg:py-20 bg-section-gradient text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
            <div className="section-divider" />
            <p className="text-gray-400 text-sm sm:text-base">Effective Date: January 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-14 lg:py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="space-y-5 sm:space-y-6 lg:space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 text-left break-words">{section.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed text-left break-words">{section.content}</p>
              </motion.div>
            ))}

            {/* Contact */}
            <div className="card overflow-hidden">
              <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3 text-left">7. Contact Us</h2>
              <p className="text-gray-400 text-sm leading-relaxed text-left break-words">
                If you have any questions about this Privacy Policy, please contact us:<br /><br />
                Email: <a href="mailto:info@adarshinfra.com" className="text-primary hover:underline break-all">info@adarshinfra.com</a><br />
                Phone: <a href="tel:+918889741005" className="text-primary hover:underline">+91 88897 41005</a><br />
                Address: Gram Panchayat Rd, Chandangaon, Chhindwara, MP 480001
              </p>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link href="/" className="btn-outline">Back to Home</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
