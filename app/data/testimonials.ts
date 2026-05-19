export type Stat = {
  value: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: "+25", label: "sites livrés depuis 2022" },
  { value: "+1 800%", label: "trafic SEO moyen après 6 mois" },
  { value: "4.9/5", label: "note moyenne clients" },
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
      "Un travail d'orfèvre. Le site nous ressemble vraiment, et le trafic Google a doublé en trois mois.",
    author: "Marie L.",
    role: "Présidente, Association Belfield",
  },
  {
    quote:
      "Je n'ai jamais eu autant de demandes de rendez-vous. Pédagogue, à l'écoute, vraiment investi du début à la fin.",
    author: "Cathy D.",
    role: "Coiffeuse à domicile, Toulouse",
  },
  {
    quote:
      "A su transformer un brief flou en un site dont je suis fier. Recommandé les yeux fermés.",
    author: "Thomas D.",
    role: "Artisan menuisier, Lot",
  },
];

export const CLIENT_LOGOS: string[] = [
  "Belfield Festival",
  "Cathy coiffure à domicile",
];
