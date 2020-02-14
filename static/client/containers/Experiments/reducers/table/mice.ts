import {createAction, handleActions, Action} from 'redux-actions';

import {ExperimentFilters} from 'entity/experiments';

export type ActionType =
    | Partial<ExperimentFilters>;

export interface MiceReducer {
    filters: Partial<ExperimentFilters>;
}

const PREFIX = '@experiments/table/mice';
const defaultState: MiceReducer = {
    filters: null,
};

export const actions = {
    setFilters: createAction<Partial<ExperimentFilters>>(`${PREFIX}/SET_FILTERS`),
};

export default handleActions<MiceReducer, ActionType>({
    [actions.setFilters.toString()]: (
        state: MiceReducer,
        {payload}: Action<Partial<ExperimentFilters>>,
    ): MiceReducer => ({
        ...state,
        filters: {
            ...state.filters,
            ...payload,
        },
    }),
}, defaultState);
