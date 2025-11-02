import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["a0.muscache.com"],
  },
  cacheComponents: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
