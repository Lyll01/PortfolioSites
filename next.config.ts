import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
  allowedDevOrigins: ["192.168.1.54", "localhost", "172.20.10.2"],
  reactStrictMode: true,
};

export default nextConfig;
