import React from 'react';

import AppRoute from 'client/components/AppRoute';

import IndexRedirect from './components/index-redirect';

export default (
    <React.Fragment>
        <AppRoute exact path="/" component={IndexRedirect}/>
    </React.Fragment>
);
