// next.config.ts
import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      // si ya tenías otros dominios como unsplash, mantenelos:
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
  protocol: "https",
  hostname: "i.pravatar.cc",
},
    ],
  },
};

export default nextConfig;