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
    title: "Création site et Référencement",
    italic: "local",
    description:
      "Un festival qui n'avait pas de site web a vu sa visibilité et sa crédibilité grandir grâce à un site sur-mesure dans leur univers, et un référencement dans toute la région pour attirer de nouveaux festivaliers.",
    services: ["Pack Business", "Référencement local", "Option: Newsletter"],
    results: [
  {
    label: "Visites du site",
    before: "0 / mois",
    after: "300 / mois"
  },
  {
    label: "Visibilité Google",
    before: "non visible",
    after: "présent sur recherches locales + Google Events"
  }
],
    image: {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/cases/belfield.png`,
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
    title: "Site vitrine",
    italic: "Google Business",
    description:
      "Une artisane qui voulait sortir des annuaires. Site simple, rapide, design soigné, et un travail de référencement local autour de Toulouse pour transformer chaque recherche en appel.",
    services: ["Pack Starter", "Référencement local", "Google Business"],
    results: [
  {
    label: "Nouveau clients",
    before: "1–2 / mois",
    after: "5-7 / mois"
  },
  {
    label: "Position sur Google",
    before: "Non positionnée",
    after: "Présente sur recherches locales (coiffeuse + ville)"
  }
],
    image: {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/cases/cathy.png`,
      alt: "Page d'accueil du site Cathy coiffeuse à domicile",
      width: 1600,
      height: 1280,
    },
    link: "https://cathy-coiffure.fr",
  },
];
