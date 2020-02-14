import {combineReducers} from 'redux';

import item, {actions as itemActions, ItemReducer} from './item';
import list, {actions as listActions, ListReducer} from './list';
import table, {actions as tableActions, TableReducers} from './table';

export interface ExperimentsReducers {
    list: ListReducer;
    item: ItemReducer;
    table: TableReducers;
}

export const actions = {
    listActions,
    itemActions,
    tableActions,
};

export default combineReducers<ExperimentsReducers>({
    list,
    item,
    table,
});
