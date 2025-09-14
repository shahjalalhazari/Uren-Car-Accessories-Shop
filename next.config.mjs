/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      // For your own domain
      {
        protocol: 'https',
        hostname: 'yourdomain.com',
      },
      // For subdomains
      {
        protocol: 'https',
        hostname: '**.yourdomain.com', // ** wildcard for all subdomains
      },
      // For CDNs
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com', // All AWS S3 buckets
      },
      // Local development
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
    ],
  },
};

export default nextConfig;
