/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require("next-translate");

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: true,
  },
  ...nextTranslate(),
};

module.exports = nextConfig;
