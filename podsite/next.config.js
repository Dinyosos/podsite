/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/podsite',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable server features for static export
  // eslint: {
  //   ignoreDuringBuilds: false,
  // },
}

module.exports = nextConfig

