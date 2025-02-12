import Head from "next/head";
import Layout from "../components/Layout";
import { FaBolt, FaBuilding, FaTools } from "react-icons/fa";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - Adarsh Infrastructure</title>
        <meta name="description" content="A-Class Government Registered Electrical Contractor specializing in power distribution, electrification, and automation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="py-20 px-8 text-center bg-gradient-to-b from-background to-secondary text-white max-w-6xl mx-auto rounded-2xl shadow-xl">
        
        {/* Main Heading */}
        <h2 className="text-6xl font-extrabold text-primary mb-6 animate-fadeIn">
          About Adarsh Infrastructure
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>

        {/* Company Description */}
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeIn">
          <span className="font-semibold text-white">Adarsh Infrastructure</span> is an **A-Class Government Registered Electrical Contractor** based in **Madhya Pradesh**. We specialize in **HT & LT power distribution, electrical pole installation, DP & transformer setups (25kV - 100kV+), and rural & urban electrification projects.** Our team delivers reliable, sustainable, and high-quality electrical solutions across **industrial, commercial, and residential sectors.**
        </p>

        {/* Vision, Values, Services */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          
          {/* Vision */}
          <div className="p-6 bg-background rounded-xl shadow-lg transition-transform transform hover:scale-105">
            <FaBolt className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
            <p className="mt-4 text-gray-300">
              To provide **sustainable and reliable electrification solutions** for **urban & rural areas, industrial parks, and smart city projects**, ensuring safe and efficient power distribution.
            </p>
          </div>

          {/* Core Values */}
          <div className="p-6 bg-background rounded-xl shadow-lg transition-transform transform hover:scale-105">
            <FaBuilding className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary">Our Commitment</h3>
            <p className="mt-4 text-gray-300">
              We are committed to **quality, safety, innovation, and timely execution** of all electrical projects, ensuring compliance with **government regulations and client expectations**.
            </p>
          </div>

          {/* Services */}
          <div className="p-6 bg-background rounded-xl shadow-lg transition-transform transform hover:scale-105">
            <FaTools className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary">Our Expertise</h3>
            <p className="mt-4 text-gray-300">
              We specialize in **HT & LT power distribution, DP & transformer installation (25kV - 100kV), urban & rural electrification, street lighting, solar power setups, and smart electrical automation.**
            </p>
          </div>
        </div>

        {/* Contact Button */}
        <div className="mt-12">
          <Link href="/contact">
            <button className="px-6 py-3 text-lg font-semibold bg-primary text-white rounded-lg shadow-md transition-transform transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
