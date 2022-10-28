/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  // experimental:{appDir: true},
  images: {
    domains: [''],
    // path prefix for Image Optimization API, useful with `loader`
    path: '/_next/image',
    // ordered list of acceptable optimized image formats (mime types)
    formats: ['image/avif', 'image/webp'],
  },
  // Set Env
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  // Webpack
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config;
  },
});

module.exports = nextConfig;
