/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['http://localhost:3000/'], // Replace with your domains
  }
};

export default nextConfig;