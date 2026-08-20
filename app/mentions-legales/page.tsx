import type { Metadata } from "next";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { LegalPage, LegalBlock } from "../components/layout/LegalPage";
import { STUDIO } from "../data/navigation";

export const metadata: Metadata = {
  title: "Mentions légales — atelierwebfrance",
  description:
    "Mentions légales du site atelierwebfrance : éditeur, hébergeur et propriété intellectuelle.",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main>
        <LegalPage
          eyebrow="INFORMATIONS LÉGALES"
          title={
            <>
              Mentions <em className="italic-display">légales</em>
            </>
          }
          updatedAt="20 août 2026"
        >
          <LegalBlock title="Éditeur du site">
            <p>
              Le site {STUDIO.domain} est édité par :
            </p>
            <ul className="space-y-1">
              <li>
                <strong>{STUDIO.legalName}</strong>, entrepreneur individuel
                (micro-entreprise), exerçant sous le nom commercial{" "}
                {STUDIO.displayName}
              </li>
              <li>Adresse : {STUDIO.address}</li>
              <li>
                Téléphone :{" "}
                <a
                  href={`tel:${STUDIO.phoneHref}`}
                  className="text-vermillion hover:underline"
                >
                  {STUDIO.phone}
                </a>
              </li>
              <li>
                Email :{" "}
                <a
                  href={`mailto:${STUDIO.email}`}
                  className="text-vermillion hover:underline"
                >
                  {STUDIO.email}
                </a>
              </li>
              <li>SIREN : {STUDIO.siren}</li>
              <li>SIRET : {STUDIO.siret}</li>
              <li>
                Immatriculé au Registre National des Entreprises (RNE) sous le
                numéro {STUDIO.siren}
              </li>
              <li>
                Code APE : {STUDIO.apeCode}, programmation informatique
              </li>
            </ul>
            <p>
              TVA non applicable, article 293 B du Code général des impôts
              (franchise en base de TVA).
            </p>
          </LegalBlock>

          <LegalBlock title="Directeur de la publication">
            <p>{STUDIO.legalName}, en qualité d&apos;éditeur du site.</p>
          </LegalBlock>

          <LegalBlock title="Hébergement">
            <p>Le site est hébergé par :</p>
            <ul className="space-y-1">
              <li>GitHub, Inc.</li>
              <li>88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis</li>
              <li>
                Téléphone :{" "}
                <a
                  href="tel:+14154486673"
                  className="text-vermillion hover:underline"
                >
                  +1 415 448 6673
                </a>
              </li>
              <li>
                Site web :{" "}
                <a
                  href="https://pages.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vermillion hover:underline"
                >
                  pages.github.com
                </a>
              </li>
            </ul>
            <p>
              Les serveurs sont situés aux États-Unis. L&apos;encadrement de ce
              transfert est détaillé dans la{" "}
              <a
                href="/confidentialite"
                className="text-vermillion hover:underline"
              >
                politique de confidentialité
              </a>
              .
            </p>
          </LegalBlock>

          <LegalBlock title="Propriété intellectuelle">
            <p>
              L&apos;ensemble des contenus présents sur le site {STUDIO.domain}{" "}
              (textes, images, logos, éléments graphiques, structure, code)
              sont, sauf mention contraire, la propriété exclusive de
              l&apos;éditeur et protégés par le droit d&apos;auteur et le droit
              de la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification ou exploitation,
              totale ou partielle, sans autorisation écrite préalable est
              interdite et constitue une contrefaçon sanctionnée par les
              articles L.335-2 et suivants du Code de la propriété
              intellectuelle.
            </p>
          </LegalBlock>

          <LegalBlock title="Liens hypertextes">
            <p>
              Le site peut contenir des liens vers des sites tiers.
              L&apos;éditeur n&apos;exerce aucun contrôle sur ces sites et
              décline toute responsabilité quant à leur contenu ou à
              l&apos;usage qui pourrait en être fait.
            </p>
          </LegalBlock>

          <LegalBlock title="Données personnelles">
            <p>
              Le traitement de vos données personnelles est détaillé dans notre{" "}
              <a
                href="/confidentialite"
                className="text-vermillion hover:underline"
              >
                politique de confidentialité
              </a>
              .
            </p>
          </LegalBlock>

          <LegalBlock title="Droit applicable">
            <p>
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, et à défaut de résolution amiable, les
              tribunaux français seront seuls compétents.
            </p>
          </LegalBlock>
        </LegalPage>
      </main>
      <Footer />
    </>
  );
}
