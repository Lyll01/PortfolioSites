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
    number: 3,
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
    number: 4,
    title: "Abonnement & mise en ligne",
    duration: "",
    description:
      "Vous choisissez votre formule d'hébergement, je développe et publie votre site. Votre activité est enfin visible sur Google.",
    deliverables: [
      "Sélection de l'abonnement d'hébergement",
      "Développement et intégration responsive",
      "Mise en ligne sur votre nom de domaine",
      "Site visible sur Google",
    ],
  },
];
