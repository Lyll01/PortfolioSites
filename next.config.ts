import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/PortfolioSites" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  allowedDevOrigins: ["192.168.1.54", "localhost", "172.20.10.2"],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
