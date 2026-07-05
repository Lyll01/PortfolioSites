import type { Metadata } from "next";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { LegalPage, LegalBlock } from "../components/layout/LegalPage";
import { STUDIO } from "../data/navigation";

export const metadata: Metadata = {
  title: "Conditions générales de vente — atelierwebfrance",
  description:
    "Conditions générales de vente d'atelierwebfrance : prestations de création, d'hébergement et de maintenance de sites web.",
  robots: { index: false, follow: true },
};

export default function CgvPage() {
  return (
    <>
      <Header />
      <main>
        <LegalPage
          eyebrow="CONDITIONS GÉNÉRALES DE VENTE"
          title={
            <>
              Conditions générales de <em className="italic-display">vente</em>
            </>
          }
          updatedAt="18 juin 2026"
        >
          <LegalBlock title="Préambule">
            <p>
              Prestations de création, d&apos;hébergement et de maintenance de
              sites web.
            </p>
            <p>
              Les présentes conditions générales de vente («&nbsp;CGV&nbsp;»)
              régissent les relations entre {STUDIO.displayName}, micro-entreprise
              dont les coordonnées figurent dans les{" "}
              <a
                href="/mentions-legales"
                className="text-vermillion hover:underline"
              >
                mentions légales
              </a>{" "}
              (le «&nbsp;Prestataire&nbsp;»), et tout client (le
              «&nbsp;Client&nbsp;») recourant à ses prestations.
            </p>
          </LegalBlock>

          <LegalBlock title="Article 1 – Objet et champ d'application">
            <p>
              Les présentes CGV s&apos;appliquent à l&apos;ensemble des
              prestations de création, d&apos;hébergement, de maintenance et de
              services associés proposées par le Prestataire. Elles complètent,
              le cas échéant, le contrat ou le devis signé entre les Parties ;
              en cas de contradiction, les stipulations particulières du contrat
              ou du devis prévalent.
            </p>
          </LegalBlock>

          <LegalBlock title="Article 2 – Acceptation">
            <p>
              Toute commande implique l&apos;acceptation sans réserve des
              présentes CGV. La signature du devis ou du contrat, ou le règlement
              de l&apos;acompte, vaut acceptation. Les CGV sont communiquées au
              Client avant la conclusion du contrat et sont accessibles à tout
              moment sur demande.
            </p>
          </LegalBlock>

          <LegalBlock title="Article 3 – Prestations et tarifs">
            <p>
              Les prestations et leurs tarifs sont détaillés dans les offres en
              vigueur du Prestataire : formules de création de site (Starter
              389&nbsp;€, Business 749&nbsp;€, ou Sur mesure), abonnements
              mensuels (Hébergement simple 9&nbsp;€, Hébergement &amp; Confort
              19&nbsp;€, Hébergement &amp; Croissance web 49&nbsp;€), prestations
              complémentaires et grille de modifications. Les prix sont indiqués
              en euros et susceptibles de révision ; le tarif applicable est
              celui en vigueur à la date de la commande.
            </p>
            <p>
              Le Prestataire relève du régime de la micro-entreprise : TVA non
              applicable, article 293 B du Code général des impôts.
            </p>
          </LegalBlock>

          <LegalBlock title="Article 4 – Commande et acompte">
            <p>
              La création d&apos;un site donne lieu au versement d&apos;un
              acompte de 40&nbsp;% à la commande, le solde de 60&nbsp;% étant
              exigible à la livraison. Les travaux débutent à réception de
              l&apos;acompte et des éléments nécessaires fournis par le Client.
            </p>
          </LegalBlock>

          <LegalBlock title="Article 5 – Modalités et délais de paiement">
            <p>
              Les abonnements sont facturés mensuellement, alignés sur le
              calendrier et payables à compter du 1er de chaque mois. En cas de
              souscription en cours de mois, le premier paiement est calculé au
              prorata des jours restants, l&apos;abonnement passant au tarif
              plein dès le 1er suivant.
            </p>
            <p>
              Le règlement s&apos;effectue par virement bancaire ou par
              prélèvement automatique. Le premier versement est réglé par
              virement ; le prélèvement, lorsqu&apos;il est retenu, prend le
              relais au 1er du mois suivant.
            </p>
          </LegalBlock>

          <LegalBlock title="Article 6 – Pénalités de retard et indemnité de recouvrement">
            <p>
              Conformément à l&apos;article L.&nbsp;441-10 du Code de commerce,
              tout retard de paiement par un Client professionnel entraîne de
              plein droit, dès le jour suivant l&apos;échéance et sans rappel
              préalable :
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                des pénalités de retard au taux de 3 fois le taux d&apos;intérêt
                légal en vigueur (taux révisé semestriellement) ;
              </li>
              <li>
                une indemnité forfaitaire pour frais de recouvrement de
                40&nbsp;€ par facture en retard, une indemnité complémentaire
                pouvant être réclamée sur justificatifs si les frais réels sont
                supérieurs.
              </li>
            </ul>
            <p>Aucun escompte n&apos;est accordé pour paiement anticipé.</p>
          </LegalBlock>

          <LegalBlock title="Article 7 – Défaut de paiement et suspension">
            <p>
              En cas de non-paiement à l&apos;échéance, le Prestataire pourra
              suspendre tout ou partie des services à l&apos;expiration d&apos;un
              délai de sept (7) jours, après information du Client par email, et
              jusqu&apos;à régularisation complète. La suspension ne vaut pas
              résiliation et ne dispense pas du paiement des sommes dues.
            </p>
          </LegalBlock>

          <LegalBlock title="Article 8 – Durée, engagement et résiliation">
            <p>
              L&apos;abonnement Hébergement simple est sans engagement. Les
              abonnements Confort et Croissance web comportent une durée
              d&apos;engagement minimale de trois (3) mois, courant à compter du
              premier mois complet. À l&apos;issue de la période initiale,
              l&apos;abonnement se reconduit tacitement par mois. Chaque Partie
              peut résilier moyennant un préavis de quinze (15) jours. Le mois
              entamé reste dû et n&apos;est pas remboursé.
            </p>
          </LegalBlock>

          <LegalBlock title="Article 9 – Propriété des éléments et réversibilité">
            <p>
              Le Client demeure propriétaire de son nom de domaine, de ses
              comptes Google, de sa fiche Google Business Profile, de ses emails
              professionnels et de son site web ; le Prestataire intervient en
              qualité de technicien pour leur gestion et configuration selon
              l&apos;abonnement souscrit. L&apos;hébergement, le déploiement et la
              maintenance technique sont assurés par le Prestataire pendant la
              durée du contrat.
            </p>
            <p>
              En fin de contrat, l&apos;ensemble des biens du Client lui est
              restitué : lorsqu&apos;il a fait réaliser son site, une copie
              exploitable des fichiers (export / code source) lui est remise
              gratuitement. Une assistance à la migration vers un hébergeur tiers
              peut être réalisée sur devis distinct. La restitution intervient
              sous réserve du paiement de toutes les sommes dues.
            </p>
          </LegalBlock>

          <LegalBlock title="Article 10 – Obligations du Client">
            <p>
              Le Client s&apos;engage à fournir en temps utile les contenus et
              accès nécessaires, à garantir qu&apos;il détient les droits sur les
              éléments transmis, à régler les sommes dues aux échéances et à
              répondre aux sollicitations dans des délais raisonnables.
            </p>
          </LegalBlock>

          <LegalBlock title="Article 11 – Propriété intellectuelle">
            <p>
              Sous réserve du paiement intégral, le Client devient propriétaire
              du site réalisé pour ses besoins propres. Le Prestataire conserve
              la propriété de ses outils, méthodes et briques logicielles
              réutilisables, ainsi que le droit de citer la réalisation à titre
              de référence, sauf opposition écrite du Client. Les composants
              tiers restent soumis à leurs licences.
            </p>
          </LegalBlock>

          <LegalBlock title="Article 12 – Données personnelles (RGPD)">
            <p>
              Pour l&apos;hébergement et la maintenance, le Client agit en
              qualité de responsable de traitement et le Prestataire en qualité
              de sous-traitant au sens du RGPD. Le Prestataire ne traite les
              données que sur instruction du Client et pour les besoins des
              prestations, met en œuvre des mesures de sécurité appropriées, et
              recourt à des sous-traitants ultérieurs (notamment l&apos;hébergeur
              et l&apos;outil de formulaire de contact). Les modalités de
              traitement sont détaillées dans notre{" "}
              <a
                href="/confidentialite"
                className="text-vermillion hover:underline"
              >
                politique de confidentialité
              </a>
              .
            </p>
          </LegalBlock>

          <LegalBlock title="Article 13 – Responsabilité">
            <p>
              Le Prestataire est tenu d&apos;une obligation de moyens. Il ne
              garantit aucun positionnement ou volume de trafic sur les moteurs
              de recherche. Sa responsabilité ne saurait être engagée du fait du
              Client, d&apos;un contenu fourni par lui, d&apos;un défaut de
              paiement ou d&apos;un service tiers ; elle est, dans la mesure
              permise par la loi, limitée aux sommes versées au titre des douze
              (12) derniers mois pour la prestation concernée.
            </p>
          </LegalBlock>

          <LegalBlock title="Article 14 – Droit de rétractation">
            <p>
              Lorsque le Client est un professionnel employant cinq salariés ou
              moins et que le contrat n&apos;entre pas dans le champ de son
              activité principale, il bénéficie du droit de rétractation de
              quatorze (14) jours prévu à l&apos;article L.&nbsp;221-3 du Code de
              la consommation. Le Client peut demander expressément que
              l&apos;exécution débute avant la fin de ce délai.
            </p>
          </LegalBlock>

          <LegalBlock title="Article 15 – Droit applicable et litiges">
            <p>
              Les présentes CGV sont soumises au droit français. En cas de
              différend, les Parties rechercheront une solution amiable avant
              toute action ; à défaut, le litige relèvera des tribunaux
              compétents dans les conditions du droit commun.
            </p>
          </LegalBlock>
        </LegalPage>
      </main>
      <Footer />
    </>
  );
}
