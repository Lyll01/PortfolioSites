export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Source unique des questions fréquentes : rendues visiblement sur /tarifs
 * ET injectées en JSON-LD (FAQPage). Google exige que le balisage FAQ
 * corresponde à un contenu réellement affiché sur la page.
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Combien coûte la création d'un site internet professionnel ?",
    answer:
      "La création d'un site internet pro et sur-mesure commence à 389 € pour un site one-page, et 749 € pour un site vitrine de 4 à 6 pages. Les projets spécifiques sont sur devis gratuit. Des prix volontairement bas et transparents, sans engagement.",
  },
  {
    question: "En combien de temps mon site est-il livré ?",
    answer:
      "Un site one-page est livré rapidement (quelques jours), et un site vitrine multi-pages en 1 à 3 semaines selon le projet. La livraison rapide est l'un de nos engagements.",
  },
  {
    question: "Pour qui sont vos sites internet ?",
    answer:
      "Nous créons des sites internet sur-mesure pour les TPE, PME, indépendants, auto-entrepreneurs, artisans et associations qui veulent une présence en ligne professionnelle à prix accessible.",
  },
  {
    question: "Intervenez-vous à Toulouse, Montauban et alentours ?",
    answer:
      "Oui. Basés à Toulouse, nous nous déplaçons pour les entretiens à Toulouse, Montauban, et alentours. Nous travaillons aussi à distance partout en France.",
  },
  {
    question: "Aidez-vous à apparaître sur Google ?",
    answer:
      "Oui. Nous optimisons le référencement Google local (SEO) et créons votre fiche Google Business Profile pour que vos clients vous trouvent sur Google et Google Maps.",
  },
  {
    question: "Comment fonctionne la plaque NFC pour les avis Google ?",
    answer:
      "La plaque contient une puce NFC programmée sur votre fiche Google Business. Votre client pose son téléphone dessus et la page pour laisser un avis s'ouvre directement : rien à installer, aucun QR code à cadrer, aucune adresse à taper. Elle fonctionne sur iPhone et sur Android, se colle sur un comptoir, une table ou une vitrine, et coûte 39 € livrée configurée, sans abonnement.",
  },
  {
    question: "L'hébergement et le nom de domaine sont-ils inclus ?",
    answer:
      "L'hébergement du site et le certificat SSL (HTTPS) sont offerts avec tous les packs de création. Votre site est mis en ligne sur votre nom de domaine, publié et visible sur Google.",
  },
];
