/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // 💥 Required for static export
  images: {
    domains: ['res.cloudinary.com'], // Keep this if you're using remote images
  },
};

export default nextConfig;
