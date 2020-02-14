import express from 'express';

import proxyPyBackendAPI from './controllers/proxy-pybackend/proxy';
import render from './controllers/render';

export default (app: express.Application) => {
    app.use(proxyPyBackendAPI);

    app.get('*', render);
};
