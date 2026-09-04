import type { Metadata } from "next";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { PageHero } from "../components/layout/PageHero";
import { Cases } from "../components/sections/Cases";
import { Testimonials } from "../components/sections/Testimonials";
import { Contact } from "../components/sections/Contact";
import { STUDIO } from "../data/navigation";
import { CASES } from "../data/cases";

const TITLE = "Réalisations — sites internet créés à Toulouse et alentours";
const DESCRIPTION =
  "Exemples concrets de sites internet créés pour des associations, artisans et indépendants : contexte du projet, services mobilisés et résultats chiffrés avant/après.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/realisations/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${STUDIO.url}/realisations/`,
    siteName: STUDIO.name,
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={`RÉALISATIONS · ${CASES.length
            .toString()
            .padStart(2, "0")} PROJETS`}
          title={
            <>
              Des projets livrés, et{" "}
              <em className="italic-display">ce qu&apos;ils ont changé</em>.
            </>
          }
          intro="Chaque projet est présenté avec son contexte, les services mobilisés et les résultats mesurés avant/après. Les sites sont en ligne : vous pouvez les visiter."
        />
        <Cases showHeader={false} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* JSON-LD — liste des projets présentés sur la page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${STUDIO.url}/realisations/#realisations`,
            name: "Réalisations — atelierwebfrance",
            description: DESCRIPTION,
            url: `${STUDIO.url}/realisations/`,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: CASES.map((c, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: `${c.client} — ${c.title}`,
                description: c.description,
                ...(c.link ? { url: c.link } : {}),
              })),
            },
          }),
        }}
      />
    </>
  );
}
