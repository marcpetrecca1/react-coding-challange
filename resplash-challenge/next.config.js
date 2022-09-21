/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  PUBLIC_KEY: process.env.API_KEY,
};

module.exports = nextConfig;
