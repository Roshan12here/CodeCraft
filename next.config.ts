import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignores all TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during the build
  },
};

export default nextConfig;
