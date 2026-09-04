import type { Metadata, Viewport } from "next";
import {
  Fraunces,
  Geist,
  JetBrains_Mono,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
  GtmConsentDefault,
} from "./components/analytics/GoogleTagManager";
import { CookieBanner } from "./components/analytics/CookieBanner";

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
  "Création de site internet pro pas cher sur-mesure à Toulouse et alentours";
const SITE_DESCRIPTION =
  "Site internet professionnel sur-mesure et pas cher pour TPE, PME, indépendants et associations. À partir de 389 €, livraison rapide. Toulouse et alentours. Devis gratuit.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · atelierwebfrance",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "création site internet pas cher",
    "site web professionnel sur-mesure",
    "site internet pas cher Toulouse",
    "création site web Montauban",
    "site internet Caussade",
    "site pro pas cher TPE",
    "site web PME",
    "site internet association",
    "site vitrine indépendant",
    "freelance création site web Toulouse",
    "livraison rapide site web",
    "référencement Google local",
    "fiche Google Business Toulouse",
    "refonte site web pas cher",
    "création site internet Occitanie",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/favicon-180.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description:
      "Site internet pro pas cher et sur-mesure pour TPE, PME, indépendants et associations. À partir de 389 €, livraison rapide. Toulouse et alentours.",
    images: [
      {
        url: "/favicon-512.png",
        width: 512,
        height: 512,
        alt: "Logo atelierwebfrance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Site internet pro pas cher et sur-mesure. À partir de 389 €, livraison rapide. Toulouse et alentours.",
    images: ["/favicon-512.png"],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
      <head>
        {/* Consent Mode v2 : « denied » par défaut, avant tout autre script. */}
        <GtmConsentDefault />
      </head>
      <body className="grain">
        <GoogleTagManagerNoScript />
        {children}
        <CookieBanner />
        {/* Conteneur GTM, chargé après l'hydratation. */}
        <GoogleTagManager />
      </body>
    </html>
  );
}
