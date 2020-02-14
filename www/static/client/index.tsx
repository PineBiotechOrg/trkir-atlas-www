import {ConnectedRouter} from 'connected-react-router';
import React, {ComponentType} from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import {Provider} from 'react-redux';

import Core from './containers/Core';
import store, {history} from './utils/infrastructure/store';

import './sass/main.scss';

const render = (Component: ComponentType) =>
    ReactDOM.hydrate(
        (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Component/>
                </ConnectedRouter>
            </Provider>
        ),
        document.getElementById('root'),
    );

window.onload = () => {
    Loadable.preloadReady().then(() => {
        render(Core);
    });
};

if ((module as any).hot) {
    (module as any).hot.accept('./index.tsx', () => {
        render(require('./containers/Core'));
    });
}
