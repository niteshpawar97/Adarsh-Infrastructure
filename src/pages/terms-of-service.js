import Head from "next/head";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    title: "1. Services Provided",
    content: "Adarsh Infrastructure specializes in HT & LT power distribution, transformer & DP installation (25kV - 100kV+), rural & urban electrification, solar power systems, street lighting, and smart automation services.",
  },
  {
    title: "2. User Responsibilities",
    content: "Clients must provide accurate project details, comply with applicable regulations, ensure site access for our teams, and not misuse our services for any illegal activities.",
  },
  {
    title: "3. Payment & Billing",
    content: "Payments must be made as per the agreed schedule outlined in the project contract. Delayed payments may incur penalties as specified in the contract terms.",
  },
  {
    title: "4. Project Timeline",
    content: "Project timelines are estimated based on scope and site conditions. We strive for on-time delivery but are not liable for delays caused by external factors such as weather, government approvals, or client-side delays.",
  },
  {
    title: "5. Liability & Warranties",
    content: "We provide high-quality services with workmanship warranty. However, we are not liable for damages due to external factors such as power grid failures, natural disasters, or unauthorized modifications.",
  },
  {
    title: "6. Dispute Resolution",
    content: "Any disputes arising from our services shall be resolved through arbitration in Chhindwara, Madhya Pradesh, as per the Indian Arbitration and Conciliation Act.",
  },
];

export default function TermsOfService() {
  return (
    <Layout>
      <Head>
        <title>Terms of Service - Adarsh Infrastructure</title>
        <meta name="description" content="Read the Terms of Service for Adarsh Infrastructure to understand our service policies and conditions." />
      </Head>

      {/* Hero */}
      <section className="py-14 sm:py-16 lg:py-20 bg-section-gradient text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">Terms of Service</h1>
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
                For questions about these Terms, contact us:<br /><br />
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
