/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // appDir: true,
    fontLoaders: [{ loader: "@next/font/google" }],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["placecage.com"],
  },
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
