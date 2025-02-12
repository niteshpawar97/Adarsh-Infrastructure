import Head from "next/head";
import Layout from "../components/Layout";

export default function TermsOfService() {
  return (
    <Layout>
      <Head>
        <title>Terms of Service - Adarsh Infrastructure</title>
        <meta name="description" content="Read the Terms of Service for Adarsh Infrastructure to understand our service policies and conditions." />
      </Head>

      <main className="py-20 px-8 text-white max-w-6xl mx-auto bg-gradient-to-b from-background to-secondary rounded-2xl shadow-xl">
        <h2 className="text-5xl font-extrabold text-primary mb-6">Terms of Service</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>

        <p className="text-lg text-gray-300">
          Effective Date: <strong>[Jan 2025]</strong>
        </p>

        <section className="mt-8 space-y-6">
          <h3 className="text-2xl font-bold text-primary">1. Services Provided</h3>
          <p className="text-gray-300">
            Adarsh Infrastructure specializes in HT & LT power distribution, transformer & DP installation (25kV - 100kV+), rural electrification, and automation.
          </p>

          <h3 className="text-2xl font-bold text-primary">2. User Responsibilities</h3>
          <p className="text-gray-300">
            Clients must provide accurate details, comply with regulations, and not misuse our services for illegal activities.
          </p>

          <h3 className="text-2xl font-bold text-primary">3. Payment & Billing</h3>
          <p className="text-gray-300">
            Payments must be made as per the agreed schedule. Delayed payments may incur penalties.
          </p>

          <h3 className="text-2xl font-bold text-primary">4. Liability & Warranties</h3>
          <p className="text-gray-300">
            We provide high-quality services but are not liable for damages due to external factors such as power grid failures or natural disasters.
          </p>

          <h3 className="text-2xl font-bold text-primary">5. Dispute Resolution</h3>
          <p className="text-gray-300">
            Any disputes shall be resolved through arbitration in Chhindwara, MP, as per the Indian Arbitration and Conciliation Act.
          </p>

          <h3 className="text-2xl font-bold text-primary">6. Contact Us</h3>
          <p className="text-gray-300">
            📧 Email: <a href="mailto:info@adarshinfra.com" className="text-accent hover:underline">info@adarshinfra.com</a><br />
            📞 Phone: <a href="tel:+918889741005" className="text-accent hover:underline">+91 88897 41005</a><br />
            📍 Address: Gram Panchayat Rd, Chandangaon, Chhindwara, MP 480001
          </p>
        </section>
      </main>
    </Layout>
  );
}
