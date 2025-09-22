import { join } from "path";
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  // Example: if you later add image domains
  images: {
    domains: []
  }
};

export default nextConfig;
