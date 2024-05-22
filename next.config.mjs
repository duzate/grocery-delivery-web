/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/product-images/1/**',
      },
    ],
  },
  images: {
    domains: ['cdn.dummyjson.com'],
  },
};

export default nextConfig;
