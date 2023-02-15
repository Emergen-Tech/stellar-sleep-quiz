/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const withTM = require("next-transpile-modules")(["@reduxjs/toolkit"]);

module.exports = withTM({
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
});
