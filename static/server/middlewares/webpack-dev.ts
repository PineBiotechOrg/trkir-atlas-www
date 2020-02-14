const WebpackDevMiddleware = require('webpack-dev-middleware');

export default (compiler, publicPath) => {
    return WebpackDevMiddleware(compiler, {publicPath});
};
