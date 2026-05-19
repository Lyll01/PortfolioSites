import type { Metadata } from "next";
import {
  Fraunces,
  Geist,
  JetBrains_Mono,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const instrument = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const SITE_URL = "https://atelierwebfrance.fr";
const SITE_NAME = "atelierwebfrance";
const SITE_TITLE =
  "atelierwebfrance — Création de sites web & Référencement SEO local";
const SITE_DESCRIPTION =
  "Studio web indépendant à Toulouse : création de sites web sur-mesure et référencement Google local. Prix bas, qualité, rapidité, proximité. Devis gratuit.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · atelierwebfrance",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "création site web",
    "site internet pas cher",
    "site web sur-mesure",
    "freelance web Toulouse",
    "référencement Google",
    "SEO local",
    "fiche Google Business",
    "site vitrine TPE",
    "site PME",
    "refonte site web",
    "atelier web France",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description:
      "Sites web sur-mesure et référencement Google pour TPE, indépendants et associations. Prix accessibles, livraison rapide, accompagnement humain.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Sites web sur-mesure et SEO local. Prix bas, qualité, rapidité, proximité.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${geist.variable} ${jetbrains.variable} ${instrument.variable}`}
    >
      <body className="grain">{children}</body>
    </html>
  );
}
