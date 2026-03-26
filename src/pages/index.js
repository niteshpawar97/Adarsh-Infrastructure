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
        <title>Adarsh Infrastructure - A-Class Electrical Contractor | Chhindwara, MP</title>
        <meta name="description" content="Adarsh Infrastructure - A-Class Government Registered Electrical Contractor in Chhindwara, MP. HT & LT power distribution, solar energy, transformer installation, and electrification services." />
        <meta property="og:title" content="Adarsh Infrastructure - A-Class Electrical Contractor" />
        <meta property="og:description" content="Government Registered Electrical Contractor providing HT & LT power distribution, solar energy, and electrification in Madhya Pradesh." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adarshinfra.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://adarshinfra.com" />
      </Head>

      <HeroSection />
      <WhyChooseUs />
      <ServicesOverview />
      <ProjectsOverview />
      <Testimonials />
      <FAQSection />
      <ContactSection />
    </Layout>
  );
}
