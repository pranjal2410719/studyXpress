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
  // Configure basePath for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS ? '/studyXpress' : '',
}

export default nextConfig
