/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  PUBLIC_KEY: process.env.PUBLIC_KEY,
};

module.exports = nextConfig;
