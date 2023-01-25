/** @type {import('next').NextConfig} */

nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['ru'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
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


