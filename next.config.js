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
