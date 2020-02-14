import {createAction, handleActions, Action} from 'redux-actions';

import {Experiment} from 'entity/experiments';

export type ActionType =
    | Experiment;

export type ItemReducer = Experiment;

const PREFIX = '@experiments/item';
const defaultState: Experiment = null;

export const actions = {
    success: createAction(`${PREFIX}/SUCCESS`),
};

export default handleActions<ItemReducer, ActionType>({
    [actions.success.toString()]: (state: ItemReducer, {payload}: Action<Experiment>): ItemReducer =>
        payload,
}, defaultState);
