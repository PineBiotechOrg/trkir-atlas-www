import {createAction, handleActions, Action} from 'redux-actions';

type ActionTypes =
    | string;

export interface GoogleOAuthReducer {
    clientId: string;
}

const PREFIX = '@googleOauth';
const defaultState: GoogleOAuthReducer = {
    clientId: null,
};

export const actions = {
    setClientId: createAction(`${PREFIX}/SET_CLIENT_ID`),
};

export default handleActions<GoogleOAuthReducer, ActionTypes>({
    [actions.setClientId.toString()]: (state: GoogleOAuthReducer, {payload}: Action<string>): GoogleOAuthReducer => ({
        ...state,
        clientId: payload,
    }),
}, defaultState);
