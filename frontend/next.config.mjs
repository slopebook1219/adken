/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // 静的エクスポートでは画像最適化が使えないため必須
};
export default nextConfig;
