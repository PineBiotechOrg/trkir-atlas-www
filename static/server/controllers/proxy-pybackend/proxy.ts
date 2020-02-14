const proxy = require('http-proxy-middleware');

const {HOSTS} = require('./consts');

const isStable = IS_STABLE || process.env.IS_STABLE;

const HOST = HOSTS[isStable ? 'STABLE' : 'TESTING'];

export default proxy('/api/**', {
    https: false,
    target: `https://${HOST}/api`,
    pathRewrite: {'^/api': '/v1'},
    secure: false,
    onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('Host', HOST);
    },
});
