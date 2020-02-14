import {createAction, handleActions, Action} from 'redux-actions';

import {Mice} from 'entity/mice';

type ActionTypes =
    | Mice;

export type MiceReducer = Mice;

const PREFIX = '@mice';
const defaultState: MiceReducer = [];

export const actions = {
    success: createAction<MiceReducer>(`${PREFIX}/SUCCESS`),
};

export default handleActions<MiceReducer, ActionTypes>({
    [actions.success.toString()]: (state: MiceReducer, {payload}: Action<Mice>): MiceReducer =>
        payload,
}, defaultState);
