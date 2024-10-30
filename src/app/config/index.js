const env = process.env.NODE_ENV || 'development';

let config = require(`./production.json`);

export default config;