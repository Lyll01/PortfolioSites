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
              { "@type": "City", name: "Caussade" },
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
              "Site web sur-mesure",
              "Site internet pas cher",
              "Référencement Google local (SEO)",
              "Fiche Google Business Profile",
              "Refonte de site web",
              "Hébergement et maintenance de site",
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
                    "Site internet entièrement sur-mesure adapté à votre projet, sur devis gratuit.",
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

      {/* JSON-LD — FAQPage (capte les requêtes locales sur Google) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${STUDIO.url}/#faq`,
            mainEntity: [
              {
                "@type": "Question",
                name: "Combien coûte la création d'un site internet professionnel ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La création d'un site internet pro et sur-mesure commence à 389 € pour un site one-page, et 749 € pour un site vitrine de 4 à 6 pages. Les projets spécifiques sont sur devis gratuit. Des prix volontairement bas et transparents, sans engagement.",
                },
              },
              {
                "@type": "Question",
                name: "En combien de temps mon site est-il livré ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un site one-page est livré rapidement (quelques jours), et un site vitrine multi-pages en 1 à 3 semaines selon le projet. La livraison rapide est l'un de nos engagements.",
                },
              },
              {
                "@type": "Question",
                name: "Pour qui sont vos sites internet ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nous créons des sites internet sur-mesure pour les TPE, PME, indépendants, auto-entrepreneurs, artisans et associations qui veulent une présence en ligne professionnelle à prix accessible.",
                },
              },
              {
                "@type": "Question",
                name: "Intervenez-vous à Toulouse, Montauban et Caussade ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui. Basés à Toulouse, nous nous déplaçons pour les entretiens à Toulouse, Montauban, Caussade et alentours. Nous travaillons aussi à distance partout en France.",
                },
              },
              {
                "@type": "Question",
                name: "Aidez-vous à apparaître sur Google ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui. Nous optimisons le référencement Google local (SEO) et créons votre fiche Google Business Profile pour que vos clients vous trouvent sur Google et Google Maps.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
