import {createAction, handleActions} from 'redux-actions';

type ActionTypes =
    | string;

export interface UIReducer {
    isCollapse: boolean;
}

const PREFIX = '@menu/ui';
const defaultState: UIReducer = {
    isCollapse: false,
};

export const actions = {
    collapseMenu: createAction<void>(`${PREFIX}/COLLAPSE_MENU`),
    extendMenu: createAction<void>(`${PREFIX}/EXTEND_MENU`),
};

export default handleActions<UIReducer, ActionTypes>({
    [actions.collapseMenu.toString()]: (state: UIReducer): UIReducer => ({
        ...state,
        isCollapse: true,
    }),
    [actions.extendMenu.toString()]: (state: UIReducer): UIReducer => ({
        ...state,
        isCollapse: false,
    }),
}, defaultState);
