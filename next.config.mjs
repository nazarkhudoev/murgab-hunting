/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi_webp/**" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:locale(en|ru)/marco-polo",
        destination: "/:locale/marco-polo-sheep-hunting",
        permanent: true,
      },
      {
        source: "/:locale(en|ru)/ibex",
        destination: "/:locale/pamir-ibex-hunting",
        permanent: true,
      },
      {
        source: "/:locale(en|ru)/about-us",
        destination: "/:locale/about",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
