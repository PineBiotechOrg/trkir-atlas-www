import React from 'react';
import Loadable from 'react-loadable';

import AppRoute from 'client/components/AppRoute';
import {MenuGroup} from 'client/components/Menu/types';
import Spinner from 'client/components/Spinner';
import {Modes} from 'client/types/infrastructure/form';
import {extendMenu} from 'client/utils/menu';

import {ROOT_PATH} from './consts';
import {PageType} from './types';

const AsyncPage = Loadable({
    loader: () => import(/* webpackChunkName: "Dashboard" */ './components/page'),
    loading: () => <Spinner/>,
} as Loadable.Options<unknown, never>);

extendMenu(MenuGroup.Library, {
    url: ROOT_PATH,
    title: 'Experiments',
});

export default (
    <React.Fragment>
        <AppRoute
            path={ROOT_PATH}
            component={AsyncPage}
            componentProps={{
                type: PageType.Experiment,
            }}
            exact
        />

        <AppRoute
            path={`${ROOT_PATH}/create`}
            component={AsyncPage}
            componentProps={{
                mode: Modes.Create,
                type: PageType.Experiment,
            }}
            exact
        />
        <AppRoute
            path={`${ROOT_PATH}/experiment/:id`}
            component={AsyncPage}
            componentProps={{
                type: PageType.Experiment,
            }}
            exact
        />
        <AppRoute
            path={`${ROOT_PATH}/:experimentId/add-mice`}
            component={AsyncPage}
            componentProps={{
                mode: Modes.Create,
                type: PageType.Experiment,
            }}
            exact
        />

        <AppRoute
            path={`${ROOT_PATH}/experiment/:id/dashboard`}
            component={AsyncPage}
            componentProps={{
                type: PageType.Dashboard,
            }}
            exact
        />

        <AppRoute
            path={`${ROOT_PATH}/experiment/:id/dashboard/mouse/:mouseId`}
            component={AsyncPage}
            componentProps={{
                type: PageType.Mouse,
            }}
            exact
        />
    </React.Fragment>
);
