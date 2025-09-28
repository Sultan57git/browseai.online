/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.openai.com',
      'avatars.githubusercontent.com', 
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'via.placeholder.com'
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
}

module.exports = nextConfig
