import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow external images from the muscache CDN used in sample data.
  // This fixes: "hostname \"a0.muscache.com\" is not configured under images"
  images: {
    domains: ["a0.muscache.com"],
    // If you later need to allow other muscache subdomains or patterns,
    // prefer `remotePatterns` with appropriate wildcards.
  },
};

export default nextConfig;
