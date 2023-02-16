/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        __dirname: true,
        __filename: true,
        global: true,
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "g-storage.slumber.one",
        port: "",
        pathname: "/starting-quiz.gif",
      },
    ],
  },
  nextConfig,
};
