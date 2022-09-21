/** @type {import('next').NextConfig} */
import * as dotenv from 'dotenv';
dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  PUBLIC_KEY: process.env.PUBLIC_KEY,
};

module.exports = nextConfig;
