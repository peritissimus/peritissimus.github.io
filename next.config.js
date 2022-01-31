/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/peritissimus.github.io/' : '',
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '',
  },
}
