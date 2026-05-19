export type CaseResult = {
  label: string;
  before: string;
  after: string;
};

export type Case = {
  number: string;
  client: string;
  sector: string;
  year: string;
  title: string;
  italic?: string;
  description: string;
  services: string[];
  results: CaseResult[];
  image: { src: string; alt: string; width: number; height: number };
  link?: string;
};

export const CASES: Case[] = [
  {
    number: "01",
    client: "Festival Belfield",
    sector: "Association culturelle",
    year: "2025",
    title: "Création site et SEO",
    italic: "local",
    description:
      "Un festival qui n'avait pas de site web a vu sa visibilité et sa crédibilité grandir grâce à un site sur-mesure dans leur univers, et un référencement dans toute la région pour attirer de nouveaux festivaliers.",
    services: ["Pack Pro", "SEO local", "Maintenance"],
    results: [
      { label: "Trafic Google", before: "120 / mois", after: "2 400 / mois" },
      { label: "Formulaires", before: "2 / mois", after: "18 / mois" },
      { label: "Position mots-clés", before: "#42", after: "#4" },
    ],
    image: {
      src: "/cases/belfield.png",
      alt: "Page d'accueil du site Festival Belfield",
      width: 1600,
      height: 1200,
    },
    link: "https://belfield-festival.fr/",
  },
  {
    number: "02",
    client: "Cathy — coiffeuse à domicile",
    sector: "Indépendante locale",
    year: "2025",
    title: "Site vitrine +",
    italic: "Google Business",
    description:
      "Une artisane qui voulait sortir des annuaires. Site simple, rapide, design soigné, et un travail SEO local autour de Toulouse pour transformer chaque recherche en appel.",
    services: ["Pack Business", "SEO local", "Google Business"],
    results: [
      { label: "Appels entrants", before: "1-2 / sem", after: "8-10 / sem" },
      { label: "1ère page Google", before: "0%", after: "80%" },
      { label: "Trafic mensuel", before: "0", after: "100 / mois" },
    ],
    image: {
      src: "/cases/cathy.png",
      alt: "Page d'accueil du site Cathy coiffeuse à domicile",
      width: 1600,
      height: 1280,
    },
    link: "https://cathy-coiffure.fr",
  },
];
