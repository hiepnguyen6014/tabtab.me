/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

module.exports = {
  env: {
    MAPBOX_ACCESS_TOKEN:
      "[MAPBOX_TOKEN]",
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  i18n,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      // use: {
      //   test: /\.(js|ts)x?$/,
      // },
      use: ['@svgr/webpack'],
    });
    options = {
      minimize: {                   // <----
        caseSensitive: false        // <----
      }                             // <----
    }
    return config;
  }
}
