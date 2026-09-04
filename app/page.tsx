import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Process } from "./components/sections/Process";
import { CasesTeaser } from "./components/sections/Cases";
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
        <CasesTeaser />
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
              "Studio web indépendant à Toulouse — création de sites internet professionnels, pas chers et sur-mesure, livrés rapidement, pour TPE, PME, indépendants et associations. Référencement Google local.",
            url: STUDIO.url,
            email: STUDIO.email,
            logo: {
              "@type": "ImageObject",
              url: `${STUDIO.url}/favicon-512.png`,
              width: 512,
              height: 512,
            },
            image: `${STUDIO.url}/favicon-512.png`,
            address: {
              "@type": "PostalAddress",
              addressLocality: STUDIO.city,
              addressRegion: STUDIO.region,
              addressCountry: "FR",
            },
            // Zones de déplacement pour entretiens + zone servie à distance.
            areaServed: [
              { "@type": "City", name: "Toulouse" },
              { "@type": "City", name: "Montauban" },
              {
                "@type": "AdministrativeArea",
                name: "Tarn-et-Garonne",
              },
              {
                "@type": "AdministrativeArea",
                name: "Haute-Garonne",
              },
              { "@type": "AdministrativeArea", name: "Occitanie" },
              { "@type": "Country", name: "France" },
            ],
            knowsAbout: [
              "Création de site internet",
              "Plaque NFC avis Google",
              "Site web sur-mesure",
              "Site internet pas cher",
              "Référencement Google local (SEO)",
              "Fiche Google Business Profile",
              "Refonte de site web",
              "Hébergement de site offert",
            ],
            priceRange: "€",
            slogan: "Site pro, pas cher, sur-mesure — livré rapidement.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Création de sites internet & Référencement",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Pack Starter — Site one-page sur-mesure",
                  description:
                    "Site internet pro pas cher, livré rapidement, pour auto-entrepreneurs et indépendants.",
                  price: "389",
                  priceCurrency: "EUR",
                },
                {
                  "@type": "Offer",
                  name: "Pack Business — Site multi-pages (4 à 6 pages)",
                  description:
                    "Site vitrine sur-mesure pour TPE, artisans, associations et restaurants qui veulent des clients locaux.",
                  price: "749",
                  priceCurrency: "EUR",
                },
                {
                  "@type": "Offer",
                  name: "Pack Sur-mesure — Projet spécifique",
                  description:
                    "Site internet entièrement sur-mesure adapté à votre projet, sur devis gratuit. Hébergement et HTTPS offerts.",
                  priceCurrency: "EUR",
                },
                {
                  "@type": "Offer",
                  name: "Plaque NFC Avis Google",
                  description:
                    "Plaque acrylique NFC programmée sur votre fiche Google Business : le client pose son téléphone et la page d'avis s'ouvre. Livrée configurée, sans abonnement.",
                  price: "39",
                  priceCurrency: "EUR",
                },
                {
                  "@type": "Offer",
                  name: "Référencement Confort — Abonnement mensuel",
                  description:
                    "Fiche Google Business Profile optimisée, support prioritaire et tarif membre sur les modifications. Hébergement offert.",
                  price: "15",
                  priceCurrency: "EUR",
                },
                {
                  "@type": "Offer",
                  name: "Référencement & Croissance web — Abonnement mensuel",
                  description:
                    "Référencement local, SEO on-page, contenu optimisé et suivi mensuel des performances pour attirer plus de clients sur Google.",
                  price: "39",
                  priceCurrency: "EUR",
                },
              ],
            },
            makesOffer: {
              "@type": "Offer",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
                minPrice: "389",
              },
            },
          }),
        }}
      />

    </>
  );
}
