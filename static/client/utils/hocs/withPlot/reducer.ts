// TODO
// eslint-disable
import {createAction, handleActions, Action} from 'redux-actions';

import store from 'client/utils/infrastructure/store';

import {PDList, WithPlotOptions} from './types';

export function makeReducer<PD>(options: WithPlotOptions<PD>) {
    type ActionTypes =
        | PDList<PD>
        | WithPlotOptions<PD>;

    interface PlotReducer {
        options: WithPlotOptions<PD>;
        items: PDList<PD>;
        error: string;
        isLoading: boolean;
    }

    const PREFIX = '@plots';
    const defaultState: PlotReducer = {
        options: null,
        isLoading: false,
        error: null,
        items: [],
    };

    const actions = {
        init: createAction<WithPlotOptions<PD>>(`${PREFIX}/INIT`),
        success: createAction<PDList<PD>>(`${PREFIX}/SUCCESS`),
        error: createAction<string>(`${PREFIX}/ERROR`),
        startLoading: createAction<void>(`${PREFIX}/START_LOADING`),
        stopLoading: createAction<void>(`${PREFIX}/STOP_LOADING`),
    };
    const bound = store.bindActions(actions);

    return {
        pure: actions,
        bound,
        defaultState,
    };
}
