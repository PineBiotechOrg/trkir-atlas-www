import {RouterState} from 'connected-react-router';

import menu, {MenuReducer} from 'client/components/Menu/reducers';

import auth, {AuthReducers} from './auth';
import camerasList, {CameraListReducer} from './camerasList';
import cameraStreaming, {CameraStreamingReducer} from './cameraStreaming';
import commonExperiments, {ExperimentsReducers} from './experiments';
import google, {GoogleOAuthReducer} from './googleOauth';
import mice, {MiceReducer} from './mice';
import page, {PageReducer} from './page';
import plots, {PlotReducer} from './plots';
import preload, {PreloadReducer} from './preload';
import router from './router';
import ui, {UIReducer} from './ui';

export interface BaseStore {
    router: RouterState;
    ui: UIReducer;
    page: PageReducer;
    menu: MenuReducer;
    preload: PreloadReducer;
    auth: AuthReducers;
    google: GoogleOAuthReducer;
    camerasList: CameraListReducer;
    mice: MiceReducer;
    commonExperiments: ExperimentsReducers;
    cameraStreaming: CameraStreamingReducer;
    plots: PlotReducer;
}

export const reducers = {
    router,
    ui,
    page,
    menu,
    preload,
    auth,
    google,
    camerasList,
    mice,
    commonExperiments,
    cameraStreaming,
    plots,
};
