import {createAction, handleActions, Action} from 'redux-actions';

type ActionTypes =
    | string;

export type CameraStreamingReducer = string;

const PREFIX = '@mice/streaming';
const defaultState: CameraStreamingReducer = null;

export const actions = {
    success: createAction<string>(`${PREFIX}/SUCCESS`),
};

export default handleActions<CameraStreamingReducer, ActionTypes>({
    [actions.success.toString()]: (state: CameraStreamingReducer, {payload}: Action<string>): CameraStreamingReducer =>
        payload,
}, defaultState);
