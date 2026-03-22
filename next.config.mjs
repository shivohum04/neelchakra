/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optional: image optimization domains when you use external images
  // images: { remotePatterns: [{ hostname: 'neelchakra.in' }] },
  async redirects() {
    return [
      {
        source: '/fencing-products/double-coated-gi-wire',
        destination: '/fencing-products/grassland-fencing',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
