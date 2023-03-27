/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: './build',
  outDir: './out',
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "public/image/loading.gif",
  },
};

module.exports = nextConfig;
