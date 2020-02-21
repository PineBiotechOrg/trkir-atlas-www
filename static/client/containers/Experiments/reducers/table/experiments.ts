import {createAction, handleActions, Action} from 'redux-actions';

import {ExperimentFilters} from 'entity/experiments';

export type ActionType =
    | Partial<ExperimentFilters>;

export interface ExperimentsReducer {
    filters: Partial<ExperimentFilters>;
}

const PREFIX = '@experiments/table/experiments';
const defaultState: ExperimentsReducer = {
    filters: null,
};

export const actions = {
    setFilters: createAction<Partial<ExperimentFilters>>(`${PREFIX}/SET_FILTERS`),
};

export default handleActions<ExperimentsReducer, ActionType>({
    [actions.setFilters.toString()]: (
        state: ExperimentsReducer,
        {payload}: Action<Partial<ExperimentFilters>>,
    ): ExperimentsReducer => ({
        ...state,
        filters: {
            ...state.filters,
            ...payload,
        },
    }),
}, defaultState);
