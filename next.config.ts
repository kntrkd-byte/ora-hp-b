import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ora-hp-b',
  images: { unoptimized: true },
};

export default nextConfig;
