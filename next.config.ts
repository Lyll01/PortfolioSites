import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/PortfolioSites",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/PortfolioSites",
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
