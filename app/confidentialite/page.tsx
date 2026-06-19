import type { Metadata } from "next";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { LegalPage, LegalBlock } from "../components/layout/LegalPage";
import { STUDIO } from "../data/navigation";

export const metadata: Metadata = {
  title: "Politique de confidentialité — atelierwebfrance",
  description:
    "Comment atelierwebfrance collecte, utilise et protège vos données personnelles, conformément au RGPD.",
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main>
        <LegalPage
          eyebrow="RGPD · DONNÉES PERSONNELLES"
          title={
            <>
              Politique de <em className="italic-display">confidentialité</em>
            </>
          }
          updatedAt="20 mai 2026"
        >
          <LegalBlock title="Préambule">
            <p>
              La présente politique décrit la manière dont {STUDIO.displayName}{" "}
              collecte, utilise et protège les données personnelles des
              visiteurs du site {STUDIO.domain}, conformément au Règlement
              général sur la protection des données (RGPD) et à la loi
              Informatique et Libertés.
            </p>
          </LegalBlock>

          <LegalBlock title="Responsable du traitement">
            <p>
              Le responsable du traitement des données est {STUDIO.displayName}, entrepreneur individuel.
            </p>
            <p>
              Pour toute question relative à vos données, vous pouvez écrire à :{" "}
              <a
                href={`mailto:${STUDIO.email}`}
                className="text-vermillion hover:underline"
              >
                {STUDIO.email}
              </a>
              .
            </p>
          </LegalBlock>

          <LegalBlock title="Données collectées et finalités">
            <p>Nous collectons uniquement les données nécessaires :</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Formulaire de contact</strong> — nom, adresse email,
                entreprise (facultatif), type de projet, budget (facultatif) et
                contenu de votre message. Finalité : répondre à votre demande et
                établir un éventuel devis. Base légale : votre consentement et
                l&apos;exécution de mesures précontractuelles.
              </li>
              <li>
                <strong>Données techniques</strong> — adresse IP, type de
                navigateur et journaux de connexion, collectés automatiquement
                par notre hébergeur à des fins de sécurité et de bon
                fonctionnement du site. Base légale : intérêt légitime.
              </li>
              <li>
                <strong>Mesure d&apos;audience</strong> — statistiques de
                fréquentation (pages vues, provenance) afin d&apos;améliorer le
                site. Base légale : votre consentement lorsque des cookies de
                mesure sont utilisés.
              </li>
            </ul>
          </LegalBlock>

          <LegalBlock title="Destinataires et sous-traitants">
            <p>
              Vos données ne sont jamais vendues ni cédées à des tiers à des
              fins commerciales. Elles peuvent être traitées par les
              prestataires suivants, agissant comme sous-traitants :
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Web3Forms</strong> — traitement de l&apos;envoi du
                formulaire de contact. Les messages sont transmis par ce service
                jusqu&apos;à notre boîte email.
              </li>
              <li>
                <strong>GitHub, Inc.</strong> — hébergement du site 
              </li>
              <li>
                <strong>Google analytics</strong> - Outil d'analyse d'actions utilisateur.
              </li>
            </ul>
            <p>
              Certains de ces prestataires peuvent traiter des données hors de
              l&apos;Union européenne ; ils mettent en œuvre des garanties
              appropriées (clauses contractuelles types).
            </p>
          </LegalBlock>

          <LegalBlock title="Durée de conservation">
            <p>
              Les messages reçus via le formulaire de contact sont conservés
              pendant la durée nécessaire au traitement de votre demande, puis
              archivés ou supprimés au maximum 3 ans après le dernier contact.
              Les données techniques sont conservées pour une durée limitée par
              l&apos;hébergeur.
            </p>
          </LegalBlock>

          <LegalBlock title="Cookies">
            <p>
              Le site utilise les cookies strictement nécessaires à son
              fonctionnement. Des cookies de mesure d&apos;audience ne sont
              déposés qu&apos;avec votre consentement. Vous pouvez configurer
              votre navigateur pour refuser les cookies ou être informé de leur
              dépôt.
            </p>
          </LegalBlock>

          <LegalBlock title="Vos droits">
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès,
              de rectification, d&apos;effacement, de limitation,
              d&apos;opposition et de portabilité de vos données. Vous pouvez
              exercer ces droits en écrivant à{" "}
              <a
                href={`mailto:${STUDIO.email}`}
                className="text-vermillion hover:underline"
              >
                {STUDIO.email}
              </a>
              .
            </p>
            <p>
              Vous avez également le droit d&apos;introduire une réclamation
              auprès de la CNIL (
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vermillion hover:underline"
              >
                www.cnil.fr
              </a>
              ).
            </p>
          </LegalBlock>

          <LegalBlock title="Sécurité">
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées (connexion sécurisée HTTPS, accès restreint aux
              données) pour protéger vos données contre tout accès, perte ou
              divulgation non autorisés.
            </p>
          </LegalBlock>
        </LegalPage>
      </main>
      <Footer />
    </>
  );
}
