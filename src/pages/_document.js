import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#0A0F2D" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ElectricalContractor",
              name: "Adarsh Infrastructure",
              description:
                "A-Class Government Registered Electrical Contractor providing HT & LT power distribution, transformer installation, solar power, and electrification services in Madhya Pradesh.",
              url: "https://adarshinfra.com",
              telephone: "+918889741005",
              email: "info@adarshinfra.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Gram Panchayat Rd, Chandangaon",
                addressLocality: "Chhindwara",
                addressRegion: "Madhya Pradesh",
                postalCode: "480001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "22.0574",
                longitude: "78.9382",
              },
              areaServed: "Madhya Pradesh, India",
              foundingDate: "2011",
              priceRange: "$$",
            }),
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
