export type NavLink = {
  label: string;
  href: string;
  id: string;
  /** "page" = page dédiée (navigation), "anchor" = section de la home (scroll). */
  kind: "page" | "anchor";
};

export const NAV_LINKS: NavLink[] = [
  { label: "Tarifs", href: "/tarifs", id: "tarifs", kind: "page" },
  {
    label: "Réalisations",
    href: "/realisations",
    id: "realisations",
    kind: "page",
  },
  { label: "Méthode", href: "/#process", id: "process", kind: "anchor" },
  { label: "Contact", href: "/contact", id: "contact", kind: "page" },
];

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/atelierwebfrance",
    icon: "Linkedin" as const,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/atelierwebfrance",
    icon: "Instagram" as const,
  },
  {
    label: "GitHub",
    href: "https://github.com/atelierwebfrance",
    icon: "Github" as const,
  },
];

export const STUDIO = {
  name: "atelierwebfrance",
  displayName: "AtelierWebFrance",
  domain: "atelierwebfrance.fr",
  url: "https://atelierwebfrance.fr",
  email: "contact@atelierwebfrance.fr",
  // Identité légale de l'entrepreneur individuel (obligatoire — art. 6 III LCEN)
  legalName: "Lylian Derramond",
  address: "90 chemin des Argoulets, 31500 Toulouse",
  phone: "06 15 63 66 58",
  phoneHref: "+33615636658",
  siren: "106 563 802",
  siret: "106 563 802 00011",
  apeCode: "6201Z",
  city: "Toulouse",
  region: "Occitanie",
  country: "France",
  // Zones d'intervention pour le SEO local (déplacements possibles pour entretiens).
  serviceAreas: ["Toulouse", "Montauban", "Occitanie"],
  serviceAreaLabel: "Toulouse, Montauban, et alentours",
};
