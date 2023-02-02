/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.BACKEND}/api/:path*` // Proxy to Backend
      }
    ];
  }
};

const withPWA = require("next-pwa");

module.exports = withPWA({

  dest: "public",
  register: true,
  skipWaiting: true


})(nextConfig);