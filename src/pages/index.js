import Head from "next/head";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesOverview from "../components/ServicesOverview";
import ProjectsOverview from "../components/ProjectsOverview";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Adarsh Infrastructure - A-Class Electrical Contractor</title>
        <meta name="description" content="A-Class Government Registered Electrical Contractor providing top-notch solutions for Residential, Commercial, and Industrial projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Projects Overview (Instead of Products) */}
      <ProjectsOverview />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQs */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />
    </Layout>
  );
}
