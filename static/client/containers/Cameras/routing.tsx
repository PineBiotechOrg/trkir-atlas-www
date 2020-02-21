import React from 'react';
import Loadable from 'react-loadable';

import AppRoute from 'client/components/AppRoute';
import {MenuGroup} from 'client/components/Menu/types';
import Spinner from 'client/components/Spinner';
import {Modes} from 'client/types/infrastructure/form';
import {extendMenu} from 'client/utils/menu';

import {ROOT_PATH} from './consts';

const AsyncPage = Loadable({
    loader: () => import(/* webpackChunkName: "Dashboard" */ './components/page'),
    loading: () => <Spinner/>,
} as Loadable.Options<unknown, never>);

extendMenu(MenuGroup.Cameras, {
    url: ROOT_PATH,
    title: 'Table',
});

export default (
    <React.Fragment>
        <AppRoute path={ROOT_PATH} component={AsyncPage} exact/>
        <AppRoute
            path={`${ROOT_PATH}/create`}
            component={AsyncPage}
            componentProps={{
                mode: Modes.Create,
            }}
            exact
        />
        <AppRoute
            path={`${ROOT_PATH}/camera/:id`}
            component={AsyncPage}
            componentProps={{
                mode: Modes.Edit,
            }}
            exact
        />
    </React.Fragment>
);
