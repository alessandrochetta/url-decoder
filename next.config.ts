import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/url-decoder",
  output: "export",
  reactStrictMode: true,
  distDir: 'docs'
};

export default nextConfig;
