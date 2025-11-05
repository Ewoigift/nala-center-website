import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // Add this block to prevent the quality warning
    qualities: [75, 80, 90, 100],

    // Keep your existing settings (example below — merge if you already have them)
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.yourcdn.com', // replace with your CDN or image domain if needed
      },
    ],
  },

  // Any other custom settings you already had remain here
};

export default nextConfig;
