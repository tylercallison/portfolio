/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/html; charset=UTF-8',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
