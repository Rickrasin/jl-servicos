import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/docs",
  assetPrefix: "/jl-servicos/",
  output: "export",
  images: { unoptimized: true }
};

export default nextConfig;
