module.exports = () => {
  /**
   * @type {import('next').NextConfig}
   */

  const nextConfig = {
    images: {
      domains: ['res.cloudinary.com'],
    },
  };
  return nextConfig;
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloudinary.com',
      },
      {
        protocol: 'http',
        hostname: 'www.w3.org',
      },
    ],
  },
};
