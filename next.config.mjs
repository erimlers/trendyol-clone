/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: false,
  images:{
    domains: ['www.freeiconspng.com', 'cdn.dsmcdn.com', 'images.unsplash.com'],
  }
};

export default nextConfig;
