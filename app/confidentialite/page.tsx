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
          updatedAt="20 août 2026"
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
              Le responsable du traitement des données est{" "}
              {STUDIO.legalName}, entrepreneur individuel exerçant sous le nom
              commercial {STUDIO.displayName}, {STUDIO.address} (voir les{" "}
              <a
                href="/mentions-legales"
                className="text-vermillion hover:underline"
              >
                mentions légales
              </a>
              ).
            </p>
            <p>
              Compte tenu de la taille de la structure et de la nature des
              traitements, la désignation d&apos;un délégué à la protection des
              données (DPO) n&apos;est pas requise. Pour toute question relative
              à vos données, vous pouvez écrire à :{" "}
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
                établir un éventuel devis. Base légale : l&apos;exécution de
                mesures précontractuelles prises à votre demande (article 6.1.b
                du RGPD). Conservation : 3 ans après le dernier contact.
              </li>
              <li>
                <strong>Données techniques</strong> — adresse IP, type de
                navigateur et journaux de connexion, collectés automatiquement
                par notre hébergeur à des fins de sécurité et de bon
                fonctionnement du site. Base légale : intérêt légitime (article
                6.1.f). Conservation : 30 jours par l&apos;hébergeur.
              </li>
              <li>
                <strong>Mesure d&apos;audience</strong> — statistiques de
                fréquentation (pages vues, provenance, type d&apos;appareil)
                collectées via Google Analytics afin d&apos;améliorer le site.
                Base légale : votre consentement (article 82 de la loi
                Informatique et Libertés). Conservation : 13 mois pour les
                cookies, 14 mois pour les données.
              </li>
            </ul>
            <p>
              Aucune donnée n&apos;est utilisée à des fins publicitaires. Aucune
              décision automatisée ni profilage n&apos;est mis en œuvre.
            </p>
          </LegalBlock>

          <LegalBlock title="Destinataires et sous-traitants">
            <p>
              Vos données ne sont jamais vendues ni cédées à des tiers à des
              fins commerciales. Elles peuvent être traitées par les
              prestataires suivants, agissant comme sous-traitants :
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Web3Forms</strong> — acheminement du formulaire de
                contact. Les messages transitent par ce service jusqu&apos;à
                notre boîte email.
              </li>
              <li>
                <strong>GitHub, Inc.</strong> (États-Unis) — hébergement du
                site sur GitHub Pages.
              </li>
              <li>
                <strong>Google Ireland Ltd / Google LLC</strong> (Irlande et
                États-Unis) — Google Analytics 4, pour la mesure
                d&apos;audience, uniquement après votre consentement.
              </li>
            </ul>
            <p>
              <strong>Transferts hors Union européenne.</strong> GitHub, Inc.,
              Google LLC et Web3Forms sont susceptibles de traiter des données
              aux États-Unis. Ces transferts sont encadrés par la décision
              d&apos;adéquation <em>EU–US Data Privacy Framework</em> et, à
              titre subsidiaire, par les clauses contractuelles types de la
              Commission européenne.
            </p>
          </LegalBlock>

          <LegalBlock title="Durée de conservation">
            <p>
              Les messages reçus via le formulaire de contact sont conservés
              pendant la durée nécessaire au traitement de votre demande, puis
              archivés ou supprimés au maximum 3 ans après le dernier contact.
              Les journaux techniques de l&apos;hébergeur sont conservés 30
              jours. Les données de mesure d&apos;audience sont conservées 14
              mois. Votre choix en matière de cookies est conservé 6 mois, puis
              vous est redemandé.
            </p>
          </LegalBlock>

          <LegalBlock title="Cookies">
            <p>
              Conformément à l&apos;article 82 de la loi Informatique et
              Libertés, <strong>aucun traceur non essentiel n&apos;est déposé
              avant votre accord</strong>. À votre première visite, une bannière
              vous permet d&apos;accepter ou de refuser, avec la même facilité
              dans les deux cas. Tant que vous n&apos;avez pas accepté, Google
              Analytics n&apos;est pas activé (Google Consent Mode v2, réglé sur
              « denied » par défaut).
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>awf_cookie_consent</strong> (atelierwebfrance) —
                mémorise votre choix de consentement. Strictement nécessaire,
                exempté de consentement. Durée : 6 mois.
              </li>
              <li>
                <strong>_ga</strong> et <strong>_ga_&lt;ID&gt;</strong> (Google)
                — distinguent les visiteurs et maintiennent la session de
                mesure. Durée : 13 mois.
              </li>
            </ul>
            <p>
              <strong>Modifier ou retirer votre choix :</strong> le bouton
              «&nbsp;Gérer mes cookies&nbsp;», présent en permanence en pied de
              page, rouvre la bannière à tout moment. Vous pouvez également
              effacer les cookies et le stockage local de ce site depuis les
              réglages de votre navigateur.
            </p>
            <p>
              Politique de confidentialité de Google :{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vermillion hover:underline"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </LegalBlock>

          <LegalBlock title="Vos droits">
            <p>
              Conformément au RGPD et à la loi Informatique et Libertés, vous
              disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement, de limitation, d&apos;opposition et de
              portabilité de vos données, du droit de retirer votre consentement
              à tout moment — sans que cela remette en cause les traitements
              déjà effectués — ainsi que du droit de définir des directives
              relatives au sort de vos données après votre décès. Vous pouvez
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
              Une réponse vous sera apportée dans un délai d&apos;un mois. Une
              pièce d&apos;identité pourra être demandée en cas de doute
              raisonnable sur votre identité.
            </p>
            <p>
              Vous avez également le droit d&apos;introduire une réclamation
              auprès de la CNIL — 3 place de Fontenoy, TSA 80715, 75334 Paris
              Cedex 07 (
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
