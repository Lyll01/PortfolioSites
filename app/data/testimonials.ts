export type Stat = {
  value: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: "+5", label: "sites livrés depuis 2025" },
  { value: "+600%", label: "trafic SEO moyen après 6 mois" },
  { value: "< 48h", label: "temps de réponse moyen" },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
{
  quote:
    "Nous n’avions pas de site auparavant. Aujourd’hui, le festival bénéficie d’une vraie présence en ligne, beaucoup plus professionnelle et visible pour le public.",
  author: "Jules D.",
  role: "Président, Association Belfield",
},
{
  quote:
    "Depuis la mise en place du site, j’ai clairement constaté une augmentation de mes nouveaux clients et de mes demandes de rendez-vous. Le site m’apporte une vraie visibilité dans mon secteur.",
  author: "Cathy D.",
  role: "Coiffeuse à domicile, Toulouse",
},
];

export const CLIENT_LOGOS: string[] = [
  "Belfield Festival",
  "Cathy coiffure à domicile",
];
