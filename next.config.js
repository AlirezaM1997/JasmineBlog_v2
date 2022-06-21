/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  generateEtags: false,
  env: {
    domainKey: "http://localhost:4000",
  },
};

module.exports = nextConfig;
