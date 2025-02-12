import Head from "next/head";
import Layout from "../components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - Adarsh Infrastructure</title>
        <meta name="description" content="Read our Privacy Policy to understand how we collect, use, and protect your personal information at Adarsh Infrastructure." />
      </Head>

      <main className="py-20 px-8 text-white max-w-6xl mx-auto bg-gradient-to-b from-background to-secondary rounded-2xl shadow-xl">
        <h2 className="text-5xl font-extrabold text-primary mb-6">Privacy Policy</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>

        <p className="text-lg text-gray-300">
        Effective Date: <strong>[Jan 2025]</strong>
        </p>

        <section className="mt-8 space-y-6">
          <h3 className="text-2xl font-bold text-primary">1. Information We Collect</h3>
          <p className="text-gray-300">We may collect personal information including your name, email, phone number, billing details, and project requirements.</p>

          <h3 className="text-2xl font-bold text-primary">2. How We Use Your Information</h3>
          <p className="text-gray-300">Your data is used for service delivery, project communication, billing, and compliance with legal requirements.</p>

          <h3 className="text-2xl font-bold text-primary">3. Data Security</h3>
          <p className="text-gray-300">We implement industry-standard security measures to protect your data but cannot guarantee 100% security.</p>

          <h3 className="text-2xl font-bold text-primary">4. Cookies & Tracking</h3>
          <p className="text-gray-300">We use cookies to enhance your website experience. You can manage cookie settings in your browser.</p>

          <h3 className="text-2xl font-bold text-primary">5. Contact Us</h3>
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
