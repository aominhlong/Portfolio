/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    async redirects() {
      return [
        {
          source: '/home',
          destination: '/',
          permanent: true,
        },
      ];
    },
  };