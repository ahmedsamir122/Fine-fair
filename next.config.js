/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "dummyjson.com",
      "cdn.dummyjson.com",
      "localhost",
      "i.dummyjson.com",
    ],
  },
};

module.exports = nextConfig;
