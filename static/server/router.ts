import express from 'express';

import proxyPyBackendAPI from './controllers/proxy-pybackend/proxy';
import render from './controllers/render';
import streaming from './controllers/streaming';

export default (app: express.Application) => {
    app.use(proxyPyBackendAPI);
    app.get('/node/stream', streaming);

    app.get('*', render);
};
