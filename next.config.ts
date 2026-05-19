import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/PortfolioSites",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
