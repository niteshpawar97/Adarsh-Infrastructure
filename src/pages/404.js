import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import { FaBolt } from "react-icons/fa";

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404 - Page Not Found | Adarsh Infrastructure</title>
      </Head>

      <section className="min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] flex items-center justify-center bg-background">
        <div className="text-center px-4 sm:px-6 max-w-lg">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <FaBolt className="text-primary text-2xl sm:text-3xl" />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gold mb-3 sm:mb-4">404</h1>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Page Not Found</h2>
          <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">Go Home</Link>
            <Link href="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
