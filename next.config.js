/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['jkt-dev-bucket.s3.ap-southeast-3.amazonaws.com'],
  },
  reactStrictMode: true,
  // basePath: '/texas',
}

module.exports = nextConfig
