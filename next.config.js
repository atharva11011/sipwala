/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Cloudinary ke liye
      },
      {
        protocol: 'https',
        hostname: 'media.bizonance.in', //  Ye line add karni hai
      },
      {
        protocol: 'https',
        hostname: 'example.com', // Test images ke liye
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Unsplash ke liye
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // Placeholder ke liye
      }
    ],
  },
};

export default nextConfig;