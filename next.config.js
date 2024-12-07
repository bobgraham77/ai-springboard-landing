/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        // Add any custom webpack rules if needed
      }
    }
  },
  reactStrictMode: true,
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-left'
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  }
}

module.exports = nextConfig
