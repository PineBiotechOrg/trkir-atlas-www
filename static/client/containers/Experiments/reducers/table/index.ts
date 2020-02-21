import {combineReducers} from 'redux';

import experiments, {actions as experimentsActions, ExperimentsReducer} from './experiments';
import mice, {actions as miceActions, MiceReducer} from './mice';

export interface TableReducers {
    mice: MiceReducer;
    experiments: ExperimentsReducer;
}

export const actions = {
    miceActions,
    experiments: experimentsActions,
};

export default combineReducers<TableReducers>({
    mice,
    experiments,
});
