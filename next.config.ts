import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const internalHost = process.env.TAURI_DEV_HOST || "localhost";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  // Disable server-side features that won't work in a static bundle
  trailingSlash: true,

  // CRITICAL FOR TAURI:
  // Ensures assets load correctly from the Tauri dev server in development mode.
  // In production (build), this is undefined so assets load relatively from the file system.
  assetPrefix: isProd ? undefined : `http://${internalHost}:3000`,
};

export default nextConfig;
