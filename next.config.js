/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/*",
        headers: [
          {
            key: "Content-Type",
            value: "text/html; charset=UTF-8",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
