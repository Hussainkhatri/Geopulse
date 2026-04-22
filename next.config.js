'use strict';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode
    reactStrictMode: true,

    // Next.js features for image optimization
    images: {
        domains: ['example.com'], // Add your image domains
    },

    // Enable SWC minification
    swcMinify: true,

    // Add additional optimization settings if needed
};

module.exports = nextConfig;