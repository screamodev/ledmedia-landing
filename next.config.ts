import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Enable the following if you need to handle images from external domains
  // images: {
  //   domains: ['example.com'],
  // },
};

export default nextConfig;
