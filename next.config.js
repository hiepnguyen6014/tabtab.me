/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      // use: {
      //   test: /\.(js|ts)x?$/,
      // },
      use: ['@svgr/webpack'],
    });
  
    return config;
  }
}
