/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["buttersystem.com", "localhost"], // Add image hosting domains if needed
    },
    output: "export", // Ensures static output if using `next export`
    trailingSlash: true, // Useful for static exports
  };
  
  export default nextConfig;