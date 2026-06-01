import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export statique pour GitHub Pages (aucun serveur Node.js).
  output: "export",
  // L'optimisation d'images à la volée n'existe pas en statique.
  images: { unoptimized: true },
  // Génère des dossiers /page/index.html → URLs propres servies par GitHub Pages.
  trailingSlash: true,
  env: {
    // Vide car le site est servi à la racine via un domaine personnalisé.
    NEXT_PUBLIC_BASE_PATH: "",
  },
  allowedDevOrigins: ["192.168.1.54", "localhost", "172.20.10.2"],
  reactStrictMode: true,
};

export default nextConfig;
