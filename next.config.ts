import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignore ESLint errors on build (for Vercel)
  },
  // You can keep other config options here
};

export default nextConfig;
