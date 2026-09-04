import type { Metadata } from "next";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Contact } from "../components/sections/Contact";
import { ProcessDetailed } from "../components/sections/Process";
import { STUDIO } from "../data/navigation";

const TITLE = "Contact & devis gratuit — création de site internet à Toulouse";
const DESCRIPTION =
  "Décrivez votre projet en quelques lignes : réponse personnelle sous 48h ouvrées, devis détaillé gratuit et sans engagement. Toulouse, Montauban, et partout en France à distance.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${STUDIO.url}/contact/`,
    siteName: STUDIO.name,
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Le formulaire est en haut : c'est la raison d'être de la page. */}
        <Contact asPageHeader />
        {/* Le déroulé complet rassure ceux qui hésitent encore à écrire. */}
        <ProcessDetailed />
      </main>
      <Footer />

      {/* JSON-LD — page de contact rattachée au studio */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": `${STUDIO.url}/contact/#contact`,
            url: `${STUDIO.url}/contact/`,
            name: TITLE,
            description: DESCRIPTION,
            mainEntity: {
              "@type": "ProfessionalService",
              "@id": `${STUDIO.url}/#studio`,
              name: STUDIO.name,
              email: STUDIO.email,
              telephone: STUDIO.phoneHref,
              address: {
                "@type": "PostalAddress",
                addressLocality: STUDIO.city,
                addressRegion: STUDIO.region,
                addressCountry: "FR",
              },
            },
          }),
        }}
      />
    </>
  );
}
