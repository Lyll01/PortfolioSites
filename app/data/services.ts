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
    price: "389 €",
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
    price: "749 €",
    delay: "1 à 3 semaines",
    featured: true,
  },
  {
    number: "03",
    title: "Pack",
    italic: "Sur mesure",
    tagline: "PROJET SPÉCIFIQUE",
    description:
      "Votre projet sort du cadre des packs ? On en parle pour vous proposer une solution vraiment adaptée.",
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
  pricePrefix?: string;
  description?: string;
  note?: string;
};

export const EXTRA_SERVICES: ExtraService[] = [
  {
    label: "Refonte de site existant",
    price: "449 €",
    pricePrefix: "À partir de",
    description:
      "Votre site est daté, lent ou pas responsive ? On le repense entièrement : design moderne, mobile, et plus rapide.",
  },
  {
    label: "Fiche Google Business & Google Maps",
    price: "99 €",
    description:
      "Apparaissez sur Google Maps et dans la recherche locale. Création et optimisation complète de votre fiche.",
    note: "Offerte avec les abonnements de référencement Confort et Croissance web (engagement 3 mois minimum).",
  },
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

// Abonnements mensuels de référencement (le 2e temps de l'offre)
export type RecurringPlan = {
  name: string;
  italic: string;
  tagline: string;
  price: string;
  /** Durée d'engagement affichée sous le prix (ex. "Engagement 3 mois minimum"). */
  commitment?: string;
  included: string[];
  excluded?: string[];
  note?: string;
  objective: string;
  featured?: boolean;
};

export const RECURRING_PLANS: RecurringPlan[] = [
  {
    name: "Référencement",
    italic: "Confort",
    tagline: "Recommandé — votre présence locale en place sur Google",
    price: "15 €/mois",
    commitment: "Engagement 3 mois minimum",
    included: [
      "Mise en place & optimisation de votre fiche Google Business Profile (Google Maps + recherche)",
      "Support prioritaire (réponse sous 24 à 48h ouvrées)",
      "Tarif membre sur toutes les modifications (−50 %)",
      "Modifications réalisées en priorité",
      "Bilan de santé du site 2×/an (vitesse, disponibilité, sécurité)",
    ],
    note: "Engagement minimum de 3 mois : la création et l'optimisation de votre fiche Google Business (99 € seule) est offerte et réalisée dès la souscription. Au-delà des 3 mois, résiliable à tout moment. Tarif membre sur les modifications : texte 5 €, visuelle 10 €, importante 20 €.",
    objective:
      "Vous apparaissez sur Google Maps, et chaque évolution de votre site vous revient moins cher.",
    featured: true,
  },
  {
    name: "Référencement",
    italic: "& Croissance web",
    tagline: "Pour être trouvé sur Google et attirer plus de clients",
    price: "39 €/mois",
    commitment: "Engagement 3 mois minimum",
    included: [
      "Tout le forfait Confort",
      "Suivi & optimisation continue de votre fiche Google Business Profile",
      "Référencement local : recherche de mots-clés stratégiques",
      "Optimisation des pages pour Google (SEO on-page)",
      "Création ou amélioration de contenu optimisé SEO",
      "Suivi mensuel des performances (trafic + positionnement)",
      "2 modifications légères incluses / mois",
    ],
    note: "Engagement minimum de 3 mois : la création et l'optimisation de votre fiche Google Business (99 € seule) est offerte et réalisée dès la souscription. Au-delà des 3 mois, résiliable à tout moment. Le service de modifications vise à maintenir et améliorer le site, et non à fonctionner comme un service de développement à la demande illimité.",
    objective:
      "Améliorer votre position sur Google et attirer plus de clients chaque mois.",
  },
];

// Produit physique mis en avant sur /tarifs (bloc dédié, pas une simple carte)
export type FeaturedProduct = {
  name: string;
  italic: string;
  tagline: string;
  price: string;
  priceNote: string;
  intro: string;
  benefits: { title: string; text: string }[];
  included: string[];
  note: string;
};

export const NFC_REVIEW_PLAQUE: FeaturedProduct = {
  name: "Plaque NFC",
  italic: "Avis Google",
  tagline: "PLUS D'AVIS, SANS AVOIR À LES DEMANDER",
  price: "39 €",
  priceNote: "Livrée configurée · sans abonnement",
  intro:
    "Vos clients contents ne laissent presque jamais d'avis. Pas par mauvaise volonté : il faut chercher votre fiche, se connecter, trouver le bouton. La plaque supprime toutes ces étapes. Le client pose son téléphone dessus, la page d'avis de votre fiche Google s'ouvre. Il ne lui reste qu'à mettre les étoiles.",
  benefits: [
    {
      title: "Un geste, pas une démarche",
      text: "Rien à installer, aucun QR code à cadrer, aucune adresse à taper. Le téléphone touche la plaque, la page s'ouvre. iPhone comme Android.",
    },
    {
      title: "Des avis qui font monter votre fiche",
      text: "Le nombre et la fraîcheur des avis pèsent lourd dans le classement Google local. Chaque nouvel avis renforce votre position sur les recherches de votre secteur.",
    },
    {
      title: "Posée là où ça compte",
      text: "Acrylique avec adhésif fort au dos : comptoir, caisse, table, vitrine, tableau de bord. Vous la collez une fois, elle travaille tous les jours.",
    },
  ],
  included: [
    "Plaque acrylique NFC, adhésif fort au dos",
    "Puce programmée sur votre fiche Google Business",
    "Testée sur iPhone et Android avant l'envoi",
    "Reprogrammable si votre fiche évolue",
  ],
  note: "Nécessite une fiche Google Business active. Vous n'en avez pas ? Nous la créons et l'optimisons pour 99 € — offerte avec les abonnements de référencement.",
};
