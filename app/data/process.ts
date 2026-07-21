export type ProcessStep = {
  number: number;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Rendez-vous découverte",
    duration: "30 min · gratuit",
    description:
      "On échange sur votre activité, vos objectifs et vos attentes. Je vous propose le pack le plus adapté et un devis transparent — sans engagement.",
    deliverables: [
      "Visio, appel téléphonique / Présentiel sur Toulouse",
      "Brief de votre activité et de vos objectifs",
      "Recommandation du pack adapté",
      "Devis clair et sans surprise",
    ],
  },
  {
  number: 2,
  title: "Validation du devis & acompte",
  duration: "24 à 72 h",
  description:
    "Une fois le devis validé, vous signez le contrat et versez l'acompte de démarrage. Cela me permet de réserver votre projet et de commencer la création de votre site.",
  deliverables: [
    "Signature du devis / contrat",
    "Versement de l'acompte",
    "Planification du projet",
    "Ouverture du projet",
  ],
},
  {
    number: 3,
    title: "Maquette sur mesure",
    duration: "3 à 5 jours",
    description:
      "Je conçois la maquette visuelle de votre site, pensée pour votre activité et vos clients. Vous découvrez à quoi ressemblera votre futur site.",
    deliverables: [
      "Direction visuelle proposée",
      "Première Maquette",
      "Structure des pages détaillée",
    ],
  },
  {
    number: 4,
    title: "Validation",
    duration: "selon vos retours",
    description:
      "Vous validez la maquette. Si quelque chose ne vous convient pas, on ajuste. Deux allers-retours sont inclus pour que le résultat soit parfait.",
    deliverables: [
      "Présentation détaillée de la maquette",
      "2 cycles d'aller-retour inclus",
      "Ajustements jusqu'à votre validation finale",
    ],
  },
  {
    number: 5,
    title: "Développement & mise en ligne",
    duration: "",
    description:
      "Je développe et publie votre site. L'hébergement et le HTTPS sont offerts. En option, un abonnement de référencement pour être trouvé sur Google.",
    deliverables: [
      "Développement et intégration responsive",
      "Hébergement & HTTPS offerts",
      "Mise en ligne sur votre nom de domaine",
      "Référencement mensuel en option",
    ],
  },
];
