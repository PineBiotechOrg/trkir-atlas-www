import {combineReducers} from 'redux';

import item, {actions as itemActions, ItemReducer} from './item';

export interface CamerasReducers {
    item: ItemReducer;
}

export const actions = {
    itemActions,
};

export default combineReducers<CamerasReducers>({
    item,
});
