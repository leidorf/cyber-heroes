const nextConfig = {
  reactStrictMode: true,
  webpack: async (config) => {
    const path = await import('path');
    config.resolve.alias["~"] = path.default.resolve(process.cwd());
    return config;
  },
};

export default nextConfig;
