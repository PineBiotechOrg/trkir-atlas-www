import {createAction, handleActions, Action} from 'redux-actions';

import {User} from 'client/types/entity/auth';
import {Status} from 'client/types/infrastructure/common';

type ActionTypes =
    | User
    | Status;

export interface AuthReducers {
    info: User;
    status: Status;
}

const PREFIX = '@auth';
const defaultState: AuthReducers = {
    info: null,
    status: null,
};

export const actions = {
    setUser: createAction<User>(`${PREFIX}/SET_USER`),
    logout: createAction(`${PREFIX}/LOGOUT`),
    setStatus: createAction<Status>(`${PREFIX}/SET_STATUS`),
};

export default handleActions<AuthReducers, any>({
    [actions.setUser.toString()]: (state: AuthReducers, {payload}: Action<User>): AuthReducers => ({
        ...state,
        info: payload,
    }),
    [actions.setStatus.toString()]: (state: AuthReducers, {payload}: Action<Status>): AuthReducers => ({
        ...state,
        status: payload,
    }),
    [actions.logout.toString()]: (_: AuthReducers): AuthReducers => ({
        info: null,
        status: 'failed',
    }),
}, defaultState);
