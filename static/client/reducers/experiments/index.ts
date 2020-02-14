import {combineReducers} from 'redux';

import item, {actions as itemActions, ItemReducer} from './item';
import list, {actions as listActions, ListReducer} from './list';

export interface ExperimentsReducers {
    list: ListReducer;
    item: ItemReducer;
}

export const actions = {
    listActions,
    itemActions,
};

export default combineReducers<ExperimentsReducers>({
    list,
    item,
});
