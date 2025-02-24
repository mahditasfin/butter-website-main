/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["buttersystem.com", "localhost"], // Add image hosting domains if needed
    },
    trailingSlash: true, // Useful for static exports
  };
  
  export default nextConfig;