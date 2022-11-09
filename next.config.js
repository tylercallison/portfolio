/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: { 
        images: { 
            allowFutureImage: true 
        } 
    },
    reactStrictMode: true,
    assetPrefix: './',
}

module.exports = nextConfig