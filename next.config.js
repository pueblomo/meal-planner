/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

const withPWA = require("next-pwa");

module.exports = withPWA({
  
    dest: "public",
    register: true,
    skipWaiting: true,
  
})(nextConfig)