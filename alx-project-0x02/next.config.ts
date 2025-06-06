import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  allowedDevOrigins: ['http://192.168.1.8:3000'],
};