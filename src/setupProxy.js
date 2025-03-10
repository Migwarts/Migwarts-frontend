const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:8080', // 백엔드 서버 주소
      changeOrigin: true,
    })
  );
};
