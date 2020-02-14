import React from 'react';
import Loadable from 'react-loadable';

import AppRoute from 'client/components/AppRoute';
import Spinner from 'client/components/Spinner';

import {GOOGLE_OAUTH_PATH} from './consts';

const AsyncPage = Loadable({
    loader: () => import(/* webpackChunkName: "GoogleOauth" */ './components/page'),
    loading: () => <Spinner/>,
} as Loadable.Options<unknown, never>);

export default (
    <React.Fragment>
        <AppRoute exact path={GOOGLE_OAUTH_PATH} component={AsyncPage}/>
    </React.Fragment>
);
