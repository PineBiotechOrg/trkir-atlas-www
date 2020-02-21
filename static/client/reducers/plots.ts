import {createAction, handleActions, Action} from 'redux-actions';

import {PDList, WithPlotOptions} from 'client/utils/hocs/withPlot';

import {Indexed} from 'infrastructure/utils';

interface ActionType {
    id: string;
    options?: WithPlotOptions<any>;
    items?: PDList<any>;
    error?: string;
}

export type PlotReducer = Indexed<{
    options: WithPlotOptions<any>;
    isLoading: boolean;
    error: string;
    items: PDList<any>;
}>

const PREFIX = '@plots';
const defaultState: PlotReducer = {};

export const actions = {
    init: createAction<ActionType>(`${PREFIX}/INIT`),
    success: createAction<ActionType>(`${PREFIX}/SUCCESS`),
    error: createAction<ActionType>(`${PREFIX}/ERROR`),
    startLoading: createAction<ActionType>(`${PREFIX}/START_LOADING`),
    stopLoading: createAction<ActionType>(`${PREFIX}/STOP_LOADING`),
};

export default handleActions<PlotReducer, ActionType>({
    [actions.init.toString()]: (state: PlotReducer, {payload}: Action<ActionType>): PlotReducer => ({
        ...state,
        [payload.id]: {
            ...state[payload.id],
            options: payload.options,
        },
    }),
    [actions.success.toString()]: (state: PlotReducer, {payload}: Action<ActionType>): PlotReducer => {
        return {
            ...state,
            [payload.id]: {
                ...state[payload.id],
                items: payload.items,
            },
        };
    },
    [actions.error.toString()]: (state: PlotReducer, {payload}: Action<ActionType>): PlotReducer => ({
        ...state,
        [payload.id]: {
            ...state[payload.id],
            error: payload.error,
        },
    }),
    [actions.startLoading.toString()]: (state: PlotReducer, {payload}: Action<ActionType>): PlotReducer => ({
        ...state,
        [payload.id]: {
            ...state[payload.id],
            isLoading: true,
        },
    }),
    [actions.stopLoading.toString()]: (state: PlotReducer, {payload}: Action<ActionType>): PlotReducer => ({
        ...state,
        [payload.id]: {
            ...state[payload.id],
            isLoading: false,
        },
    }),
}, defaultState);
