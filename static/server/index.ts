import cookieParser from 'cookie-parser';
import express from 'express';
import robots from 'express-robots-txt';
import Loadable from 'react-loadable';
import webpack from 'webpack';

import webpackDevMiddleware from './middlewares/webpack-dev';
import webpackHMRMiddleware from './middlewares/webpack-hmr';
import router from './router';

const PORT = 3061;

if (typeof window === 'undefined') {
    (global as any).window = {};
    (global as any).document = {};
}

const clientConfig = require('../../webpack.client.config.js');
const compiler = webpack(clientConfig);

const server: express.Application = express();
server.disable('x-powered-by');

server.use(cookieParser());

server.use(express.static('dist/client'));
server.use(robots('www/robots.txt'));

server.use(webpackDevMiddleware(compiler, clientConfig.output.publicPath));
server.use(webpackHMRMiddleware(compiler));

router(server);

Loadable.preloadAll()
    .then(() => {
        server.listen(PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`Running on http://localhost:${PORT}/`);
        });
    })
    .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
    });
