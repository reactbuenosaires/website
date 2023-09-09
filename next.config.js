/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports =  {
  images: {
    domains: ['i.ytimg.com'], // Add domains for images you want to use
  }
}
