import {createAction, handleActions, Action} from 'redux-actions';

import {Camera} from 'entity/cameras'

type ActionTypes =
    | Camera;

export type ItemReducer = Camera;

const PREFIX = '@cameras/item';
const defaultState: ItemReducer = null;

export const actions = {
    success: createAction<Camera>(`${PREFIX}/SUCCESS`),
};

export default handleActions<ItemReducer, ActionTypes>({
    [actions.success.toString()]: (state: ItemReducer, {payload}: Action<Camera>): ItemReducer =>
        payload,
}, defaultState);
