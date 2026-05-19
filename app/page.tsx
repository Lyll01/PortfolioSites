import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Process } from "./components/sections/Process";
import { Cases } from "./components/sections/Cases";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";
import { STUDIO } from "./data/navigation";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Cases />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* JSON-LD — ProfessionalService (Local Business) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": `${STUDIO.url}/#studio`,
            name: "atelierwebfrance",
            alternateName: "Atelier Web France",
            description:
              "Studio web indépendant à Toulouse — création de sites web sur-mesure et référencement Google pour TPE, indépendants et associations.",
            url: STUDIO.url,
            telephone: STUDIO.phone,
            email: STUDIO.email,
            address: {
              "@type": "PostalAddress",
              addressLocality: STUDIO.city,
              addressCountry: "FR",
            },
            areaServed: { "@type": "Country", name: "France" },
            priceRange: "€",
            slogan: "Prix bas, qualité, rapidité, proximité.",
            sameAs: [
              "https://linkedin.com/company/atelierwebfrance",
              "https://instagram.com/atelierwebfrance",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Création de sites web & SEO",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Pack Starter — Site One Page",
                  price: "290",
                  priceCurrency: "EUR",
                },
                {
                  "@type": "Offer",
                  name: "Pack Business — Jusqu'à 5 pages",
                  price: "690",
                  priceCurrency: "EUR",
                },
                {
                  "@type": "Offer",
                  name: "Pack Pro — Jusqu'à 10 pages",
                  price: "990",
                  priceCurrency: "EUR",
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
