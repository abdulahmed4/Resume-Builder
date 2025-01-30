require("dotenv").config();

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w0mlmrgwbziwquaq.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "icj7a8ebw5lk4vwc.public.blob.vercel-storage.com", // Add this hostname
      },
    ],
  },
};

export default nextConfig;
