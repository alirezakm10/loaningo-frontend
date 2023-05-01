/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  output: 'standalone',
  env: {
    requestdemo: 'http://loaningo.com/api/demo',
    contactus: 'https://loaningo.com/api/contact'
  }
}

module.exports = nextConfig
