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
    price: "390 €",
    pricePrefix: "À partir de",
    description:
      "Votre site est daté, lent ou pas responsive ? On le repense entièrement : design moderne, mobile, et plus rapide.",
  },
  {
    label: "Fiche Google Business & Google Maps",
    price: "99 €",
    description:
      "Apparaissez sur Google Maps et dans la recherche locale. Création et optimisation complète de votre fiche.",
    note: "Inclus dans les abonnements Confort et Croissance web.",
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

// Abonnements mensuels d'hébergement (le 2e temps de l'offre)
export type RecurringPlan = {
  name: string;
  italic: string;
  tagline: string;
  price: string;
  included: string[];
  excluded?: string[];
  note?: string;
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
      "Hébergement du site",
      "Certificat SSL (HTTPS)",
      "Monitoring de disponibilité (alertes en cas de panne)",
      "Sauvegarde automatique",
      "Maintenance technique de base (mise à jour / sécurité)",
      "Support par email léger",
    ],
    objective:
      "Garantir que votre site est toujours en ligne, rapide et sécurisé.",
  },
  {
    name: "Hébergement",
    italic: "& Confort",
    tagline: "Recommandé — votre présence locale en place, et vos évolutions moins chères",
    price: "19 €/mois",
    included: [
      "Tout le forfait Sérénité",
      "Mise en place & optimisation de votre fiche Google Business Profile (Google Maps + recherche)",
      "Sauvegardes quotidiennes",
      "Support prioritaire (réponse sous 24 à 48h ouvrées)",
      "Tarif membre sur toutes les modifications (−50 %)",
      "Modifications réalisées en priorité",
      "Bilan de santé du site 2×/an (vitesse, disponibilité, sécurité)",
    ],
    note: "L'optimisation de la fiche Google est une prestation unique réalisée à la souscription. Tarif membre sur les modifications : texte 5 €, visuelle 10 €, importante 20 €.",
    objective:
      "Vous apparaissez sur Google Maps, tout est pris en charge, et chaque évolution de votre site vous revient moins cher.",
    featured: true,
  },
  {
    name: "Hébergement",
    italic: "& Croissance web",
    tagline: "Pour être trouvé sur Google et attirer plus de clients",
    price: "49 €/mois",
    included: [
      "Tout le forfait Confort",
      "Suivi & optimisation continue de votre fiche Google Business Profile",
      "SEO local : recherche de mots-clés stratégiques",
      "Optimisation des pages pour Google (SEO on-page)",
      "Création ou amélioration de contenu SEO",
      "Suivi mensuel des performances (trafic + positionnement)",
      "2 modifications légères incluses / mois",
    ],
    note: "Le service de modifications vise à maintenir et améliorer le site, et non à fonctionner comme un service de développement à la demande illimité.",
    objective:
      "Améliorer votre position sur Google et attirer plus de clients chaque mois.",
  },
];
