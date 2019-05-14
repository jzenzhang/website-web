const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'http://106.14.225.234:8080/',
    changeOrigin: true,
  }));
};