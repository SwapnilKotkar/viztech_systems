/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    WEBSITE_URL : process.env.WEBSITE_URL,
    MONGODB_URL : process.env.MONGODB_URL,
    JWT_SECRET_KEY : process.env.JWT_SECRET_KEY,
    MY_AWS_ACCESS_KEY_NAME : process.env.MY_AWS_ACCESS_KEY_NAME,
    MY_AWS_SECRET_ACCESS_KEY_NAME : process.env.MY_AWS_SECRET_ACCESS_KEY_NAME,
    MY_AWS_BUCKET_NAME : process.env.MY_AWS_BUCKET_NAME,
    MY_AWS_BUCKET_REGION : process.env.MY_AWS_BUCKET_REGION
  }
}

module.exports = nextConfig
