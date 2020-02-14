import {combineReducers} from 'redux';

import mice, {actions as miceActions, MiceReducer} from './mice';

export interface TableReducers {
    mice: MiceReducer;
}

export const actions = {
    miceActions,
};

export default combineReducers<TableReducers>({
    mice,
});
