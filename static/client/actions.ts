import {actions as menuActions} from 'client/components/Menu/reducers';
import {actions as authActions} from 'client/reducers/auth';
import {actions as camerasListActions} from 'client/reducers/camerasList';
import {actions as cameraStreamingActions} from 'client/reducers/cameraStreaming';
import {actions as experimentsActions} from 'client/reducers/experiments';
import {actions as googleOauthActions} from 'client/reducers/googleOauth';
import {actions as miceActions} from 'client/reducers/mice';
import {actions as pageActions} from 'client/reducers/page';
import {actions as plotsActions} from 'client/reducers/plots';
import {actions as preloadActions} from 'client/reducers/preload';
import {actions as routerActions} from 'client/reducers/router';
import {actions as uiActions} from 'client/reducers/ui';
import store from 'client/utils/infrastructure/store';

export const pure = {
    router: routerActions,
    page: pageActions,
    ui: uiActions,
    menu: menuActions,
    preload: preloadActions,
    auth: authActions,
    googleOauth: googleOauthActions,
    camerasList: camerasListActions,
    mice: miceActions,
    commonExperiments: experimentsActions,
    cameraStreaming: cameraStreamingActions,
    plots: plotsActions,
};
export const bound = store.bindActions(pure);
