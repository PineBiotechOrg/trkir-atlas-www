import {createAction, handleActions, Action} from 'redux-actions';

import {CamerasList} from 'entity/cameras';

type ActionTypes =
    | CamerasList;

export type CameraListReducer = CamerasList;

const PREFIX = '@camerasList/items';
const defaultState: CameraListReducer = [];

export const actions = {
    success: createAction<CamerasList>(`${PREFIX}/SUCCESS`),
};

export default handleActions<CameraListReducer, ActionTypes>({
    [actions.success.toString()]: (state: CameraListReducer, {payload}: Action<CamerasList>): CameraListReducer =>
        payload,
}, defaultState);
