const handler = require('serverless-express/handler');
const app = require('./app');

module.exports.api = handler(app);
