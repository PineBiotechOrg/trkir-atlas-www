import {createAction, handleActions} from 'redux-actions';

export type ActionType =
    | number;

export interface UIReducer {
    loading: boolean;
}

const PREFIX = '@ui';
const defaultState: UIReducer = {
    loading: false,
};

export const actions = {
    startLoading: createAction(`${PREFIX}/START_LOADING`),
    stopLoading: createAction(`${PREFIX}/STOP_LOADING`),
};

export default handleActions<UIReducer, ActionType>({
    [actions.startLoading.toString()]: (state: UIReducer): UIReducer => ({
        ...state,
        loading: true,
    }),
    [actions.stopLoading.toString()]: (state: UIReducer): UIReducer => ({
        ...state,
        loading: false,
    }),
}, defaultState);
