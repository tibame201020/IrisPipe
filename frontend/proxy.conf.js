const proxyTarget = process.env.IRISPIPE_PROXY_TARGET ?? 'http://localhost:8080';

module.exports = {
  '/api': {
    target: proxyTarget,
    secure: false,
    changeOrigin: true,
  },
  '/actuator': {
    target: proxyTarget,
    secure: false,
    changeOrigin: true,
  },
};
