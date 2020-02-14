import {createAction, handleActions, Action} from 'redux-actions';

type ActionTypes =
    | string;

export interface SidebarReducer {
    activePath: string;
}

const PREFIX = '@menu/sidebar';
const defaultState: SidebarReducer = {
    activePath: '/',
};

export const actions = {
    setActive: createAction<string>(`${PREFIX}/SET_ACTIVE`),
    setActiveStart: createAction(`${PREFIX}/SET_ACTIVE_START`),
};

export default handleActions<SidebarReducer, ActionTypes>({
    [actions.setActive.toString()]: (state: SidebarReducer, {payload}: Action<string>): SidebarReducer => ({
        ...state,
        activePath: payload,
    }),
    [actions.setActiveStart.toString()]: (state: SidebarReducer): SidebarReducer => ({
        ...state,
        activePath: '/',
    }),
}, defaultState);
