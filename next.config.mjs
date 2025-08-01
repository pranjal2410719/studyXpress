/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable static exports for platforms like Netlify
  output: 'export',
  trailingSlash: true,
  // Disable server-side features for static export
  // Configure basePath if deploying to a subdirectory
  // basePath: '/studyxpress',
}

export default nextConfig
