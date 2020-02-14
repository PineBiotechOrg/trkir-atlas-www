import React from 'react';
import Loadable from 'react-loadable';

import AppRoute from 'client/components/AppRoute';

const AsyncPage = Loadable({
    loader: () => import(/* webpackChunkName: "NotFoundPage" */ './components/Page'),
    loading: () => null,
});

export default (
    <React.Fragment>
        <AppRoute component={AsyncPage}/>
    </React.Fragment>
);
