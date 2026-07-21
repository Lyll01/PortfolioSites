export type SelectOption = { value: string; label: string };
export type SelectGroup = { label: string; options: SelectOption[] };
export type SelectItem = SelectOption | SelectGroup;

export const PROJECT_TYPES: SelectItem[] = [
  { value: "", label: "Sélectionner…" },
  {
    label: "Création de site",
    options: [
      { value: "starter", label: "Pack Starter — 389 €" },
      { value: "business", label: "Pack Business — 749 €" },
      { value: "sur-mesure", label: "Pack Sur mesure — sur devis" },
    ],
  },
  {
    label: "Site existant",
    options: [
      { value: "refonte", label: "Refonte de site — à partir de 390 €" },
      { value: "google-business", label: "Fiche Google Business & Maps — 99 €" },
      { value: "modifications", label: "Modifications ponctuelles (10 / 20 / 40 €)" },
    ],
  },
  {
    label: "Référencement mensuel",
    options: [
      { value: "referencement-confort", label: "Référencement Confort — 15 €/mois" },
      { value: "referencement-croissance", label: "Référencement & Croissance web — 39 €/mois" },
    ],
  },
  { value: "autre", label: "Autre / je ne sais pas encore" },
];

export const BUDGETS: SelectItem[] = [
  { value: "", label: "À définir" },
  { value: "lt500", label: "Moins de 500 €" },
  { value: "500-1000", label: "500 € – 1 000 €" },
  { value: "1000-2500", label: "1 000 € – 2 500 €" },
  { value: "mensuel", label: "Abonnement mensuel uniquement" },
];
