import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
        pathname: "/**", // permite qualquer caminho dentro do domínio
      },
    ],
  },
};

export default nextConfig;
