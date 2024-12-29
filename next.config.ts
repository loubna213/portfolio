import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webback: (config: any) => {
    config.cache = false
    return config;
  }
};

export default nextConfig;
