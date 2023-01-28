/** @type {import('next').NextConfig} */

nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru',
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
}


const shouldAnalyzeBundles = process.env.ANALYZE === true;

if (shouldAnalyzeBundles) {
  const withNextBundleAnalyzer =
      require('@next/bundle-analyzer')({
        openAnalyzer: true,
      });
  nextConfig = withNextBundleAnalyzer(nextConfig);
}

module.exports = nextConfig;


