import {createAction, handleActions, Action} from 'redux-actions';

import {Experiments} from 'entity/experiments';

export type ActionType =
    | Experiments;

export type ListReducer = Experiments;

const PREFIX = '@experiments/list';
const defaultState: Experiments = [];

export const actions = {
    success: createAction(`${PREFIX}/SUCCESS`),
};

export default handleActions<ListReducer, ActionType>({
    [actions.success.toString()]: (state: ListReducer, {payload}: Action<Experiments>): ListReducer =>
        payload,
}, defaultState);
