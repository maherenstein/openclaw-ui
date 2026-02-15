/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  i18n: {
    locales: ["en", "ar", "fr"],
    defaultLocale: "en",
    localeDetection: true
  }
};

module.exports = nextConfig;