// config.js
const dotenv = require('dotenv');

dotenv.config();

const config = {
  apiUrl: process.env.REACT_APP_API_URL,
};

export default config;