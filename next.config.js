/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // setup
  18n: {
    locales: ["en-US", "ko"],
    defaultLocale: "en-US",
    domains: [
      {
        domain: "next-ts.vercel.app/kr",
        defaultLocale: "ko",
      },
    ],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["placecage.com"],
  },
  experimental: {
    fontLoaders: [{ loader: "@next/font/google" }],
  },
  sassOptions: {
    // includePaths: [path.join(__dirname, "styles")],
  },

  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
