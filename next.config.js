/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sripolyclinic.com', // Replace with your actual non-www domain
          },
        ],
        destination: 'https://www.sripolyclinic.com/:path*', // Replace with your actual www domain
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
