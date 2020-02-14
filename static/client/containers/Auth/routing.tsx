import React from 'react';
import Loadable from 'react-loadable';

import AppRoute from 'client/components/AppRoute';
import Spinner from 'client/components/Spinner';

import {AUTH_PATH} from './consts';

const AsyncPage = Loadable({
    loader: () => import(/* webpackChunkName: "Auth" */ './components/page'),
    loading: () => <Spinner/>,
} as Loadable.Options<unknown, never>);

export default (
    <React.Fragment>
        <AppRoute exact path={AUTH_PATH} component={AsyncPage}/>
    </React.Fragment>
);
