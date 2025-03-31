/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
  output: 'standalone', // Gera uma pasta independente para deploy (recomendado para Azure)
  // ou 'output: 'export' se for um projeto estático (SSG)
};