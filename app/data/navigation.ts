export type NavLink = {
  label: string;
  href: string;
  id: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services", id: "services" },
  { label: "Réalisations", href: "#realisations", id: "realisations" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Témoignages", href: "#temoignages", id: "temoignages" },
  { label: "Contact", href: "#contact", id: "contact" },
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
  phone: "+33 X XX XX XX XX",
  city: "Toulouse",
  region: "France",
};
