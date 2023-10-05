/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.ytimg.com'], // Add all domains you want to allow for images
  },
}

module.exports = nextConfig;
