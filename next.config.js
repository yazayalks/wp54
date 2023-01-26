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

  mode:"production",
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
  plugins: [

  ]
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


