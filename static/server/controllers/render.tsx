import {NextFunction, Request, Response} from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Loadable from 'react-loadable';
import {getBundles} from 'react-loadable-ssr-addon';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';

import Core from 'client/containers/Core';
import configureStore from 'client/store';

import renderer from '../utils/renderer';

const manifest = require('../../../dist/client/react-loadable-ssr-addon.json');

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        const {reducers} = require('../../client/reducers');
        const {store} = configureStore(
            reducers,
            {},
            {isLogger: false, router: {initialEntries: [req.url]}},
        );

        const context = {};
        const modules = new Set();
        const addModule = moduleName => modules.add(moduleName);

        const sheet = new ServerStyleSheet();

        const html = renderToString((
            <StyleSheetManager sheet={sheet.instance}>
                <Loadable.Capture report={addModule}>
                    <Provider store={store}>
                        <StaticRouter location={req.path} context={context}>
                            <Core/>
                        </StaticRouter>
                    </Provider>
                </Loadable.Capture>
            </StyleSheetManager>
        ));

        const bundles = getBundles(
            manifest,
            [...manifest.entrypoints, ...Array.from(modules)],
        );

        const styles = bundles.css || [];
        const scripts = bundles.js || [];
        const styledTags = sheet.getStyleTags();

        res.send(renderer({
            styles,
            scripts,
            html,
            store,
            styledTags,
        }));
    } catch (error) {
        next(error);
    }
};
