import {createAction, handleActions} from 'redux-actions';

export type ActionType =
    | void;

export interface PageReducer {
    isReady: boolean;
}

const PREFIX = '@page';
const defaultState: PageReducer = {
    isReady: false,
};

export const actions = {
    setAsReady: createAction(`${PREFIX}/SET_AS_READY`),
};

export default handleActions<PageReducer, ActionType>({
    [actions.setAsReady.toString()]: (state: PageReducer): PageReducer => ({...state, isReady: true}),
}, defaultState);
