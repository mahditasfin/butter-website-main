/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
      unoptimized: true, // Required for static export
    },
    trailingSlash: true,
  }
  
  export default nextConfig