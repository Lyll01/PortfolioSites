import type { Metadata } from "next";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { PageHero } from "../components/layout/PageHero";
import { Pricing } from "../components/sections/Pricing";
import { Faq } from "../components/sections/Faq";
import { Contact } from "../components/sections/Contact";
import { STUDIO } from "../data/navigation";
import { FAQ_ITEMS } from "../data/faq";

const TITLE =
  "Tarifs création de site internet — à partir de 389 € · Toulouse";
const DESCRIPTION =
  "Tarifs clairs et sans surprise : site one-page à 389 €, site vitrine 4 à 6 pages à 749 €, refonte dès 449 €, fiche Google Business à 99 € et abonnement de référencement dès 15 €/mois. Hébergement et HTTPS offerts.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/tarifs/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${STUDIO.url}/tarifs/`,
    siteName: STUDIO.name,
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function TarifsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="TARIFS · CRÉATION & RÉFÉRENCEMENT"
          title={
            <>
              Des prix{" "}
              <em className="italic-display">annoncés d&apos;avance</em>, du
              premier au dernier euro.
            </>
          }
          intro="Deux temps, deux logiques : la création du site se paie une fois, le référencement se pilote au mois. Tout est listé ci-dessous, options et modifications comprises."
          meta={[
            "Site one-page dès 389 €",
            "Site vitrine dès 749 €",
            "Hébergement & HTTPS offerts",
            "Devis gratuit, sans engagement",
          ]}
        />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />

      {/* JSON-LD — FAQPage (adossé à la FAQ réellement affichée ci-dessus) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${STUDIO.url}/tarifs/#faq`,
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
