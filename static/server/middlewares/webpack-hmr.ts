const WebpackHotMiddleware = require('webpack-hot-middleware');

export default (compiler, opts?) => {
    return WebpackHotMiddleware(compiler, opts);
};
