export type Service = {
  number: string;
  title: string;
  italic: string;
  tagline: string;
  description: string;
  deliverables: string[];
  price: string;
  delay: string;
  featured?: boolean;
  custom?: boolean;
};

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Pack",
    italic: "Starter",
    tagline: "PRÉSENCE ESSENTIELLE",
    description:
      "Pour auto-entrepreneurs et débutants qui veulent exister sur internet — vite, simplement, sans se ruiner.",
    deliverables: [
      "Site one-page sur-mesure",
      "Sections : présentation, services, zone d'intervention",
      "Design responsive (mobile, tablette, desktop)",
    ],
    price: "349 €",
    delay: "Livraison rapide",
  },
  {
    number: "02",
    title: "Pack",
    italic: "Business",
    tagline: "VISIBILITÉ LOCALE",
    description:
      "Pour TPE, artisans, associations et restaurants qui veulent générer des clients locaux avec un vrai site multi-pages.",
    deliverables: [
      "4 à 6 pages (accueil, services, à propos, contact, galerie)",
      "Formulaire de contact complet",
      "Optimisation mobile avancée",
    ],
    price: "649 €",
    delay: "1 à 3 semaines",
    featured: true,
  },
  {
    number: "03",
    title: "Pack",
    italic: "Sur mesure",
    tagline: "PROJET SPÉCIFIQUE",
    description:
      "Votre projet sort du cadre des packs ? Boutique en ligne, plateforme métier, fonctionnalité particulière, refonte ambitieuse… On en parle pour vous proposer une solution vraiment adaptée.",
    deliverables: [
      "Évaluation gratuite de votre besoin",
      "Devis détaillé et transparent",
      "Solution pensée pour votre projet",
      "Accompagnement de bout en bout",
    ],
    price: "Sur devis",
    delay: "À définir ensemble",
    custom: true,
  },
  //Bientot. dispo
  // {
  //   number: "04",
  //   title: "Pack",
  //   italic: "Pro",
  //   tagline: "MARQUE & AUTONOMIE",
  //   description:
  //     "Pour PME, marques et entreprises qui veulent un site qui marque les esprits — et garder la main pour le faire évoluer eux-mêmes.",
  //   deliverables: [
  //     "Jusqu'à 10 pages, design 100% sur-mesure",
  //     "Animations et micro-interactions soignées",
  //   ],
  //   price: "990 €",
  //   delay: "3 à 4 semaines",
  // },
];

// Services additionnels (affichés sous les 3 packs principaux)
export type ExtraService = {
  label: string;
  price: string;
  note?: string;
};

export const EXTRA_SERVICES: ExtraService[] = [
  { label: "Refonte de site existant", price: "390 €" },
  { label: "Fiche Google Business & Google Maps", price: "99 €" },
];

// Modifications ponctuelles (pour les clients sans abonnement ou hors forfait)
export type Modification = {
  label: string;
  price: string;
  examples: string[];
};

export const MODIFICATIONS: Modification[] = [
  {
    label: "Modification de texte",
    price: "10 €",
    examples: [
      "Correction ou ajout de texte simple",
      "Modification d'informations",
      "Changement horaires / coordonnées",
    ],
  },
  {
    label: "Modification visuelle",
    price: "20 €",
    examples: [
      "Remplacement de photos",
      "Ajustement de sections",
      "Modification légère de mise en page",
    ],
  },
  {
    label: "Création ou modification importante",
    price: "40 €",
    examples: [
      "Ajout d'une nouvelle section importante",
      "Création d'une page supplémentaire",
      "Restructuration d'une page existante",
    ],
  },
];

export const MODIFICATIONS_NOTE =
  "Les demandes complexes ou hors forfait peuvent faire l'objet d'un devis complémentaire.";

// Abonnements mensuels d'hébergement (le 2e temps de l'offre)
export type RecurringPlan = {
  name: string;
  italic: string;
  tagline: string;
  price: string;
  included: string[];
  excluded?: string[];
  objective: string;
  featured?: boolean;
};

export const RECURRING_PLANS: RecurringPlan[] = [
  {
    name: "Hébergement",
    italic: "simple",
    tagline: "L'essentiel pour que votre site reste en ligne",
    price: "9 €/mois",
    included: [
      "Hébergement haute performance",
      "Nom de domaine offert",
      "Certificat SSL inclus",
      "Sauvegardes automatiques hebdomadaires",
      "Disponibilité 24/7",
    ],
    objective:
      "Garantir que votre site est toujours en ligne, rapide et sécurisé.",
  },
  {
    name: "Hébergement",
    italic: "& SEO local",
    tagline: "Recommandé — pour être trouvé sur Google",
    price: "29 €/mois",
    included: [
      "Tout du pack Hébergement simple",
      "Optimisation SEO locale",
      "Gestion Google Business Profile",
      "1 modification du site / mois",
      "1 adresse Mail personnalisé",
      "Support prioritaire",
    ],
    objective:
      "Faire venir des clients en apparaissant dans les recherches locales sur Google.",
    featured: true,
  },
{
  name: "Hébergement",
  italic: "& SEO PRO",
  tagline: "Recommandé — pour dominer Google localement",
  price: "59 €/mois",
  included: [
    "Tout du pack Hébergement & SEO local",
    "Optimisation SEO avancée (technique + contenu)",
    "Recherche et optimisation de mots-clés stratégiques",
    "Optimisation des pages pour le positionnement Google",
    "Amélioration continue du référencement (SEO on-page)",
    "Suivi des performances SEO mesuel (positions + trafic)",
  ],
  objective:
    "Positionner votre site dans les premiers résultats Google sur votre activité afin de générer un flux régulier de clients qualifiés.",
}
];
