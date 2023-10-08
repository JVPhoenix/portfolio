/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media2.giphy.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media3.giphy.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
