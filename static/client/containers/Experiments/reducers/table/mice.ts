import {createAction, handleActions, Action} from 'redux-actions';

import {ExperimentMiceFilters} from 'entity/experiments';

export type ActionType =
    | Partial<ExperimentMiceFilters>;

export interface MiceReducer {
    filters: Partial<ExperimentMiceFilters>;
}

const PREFIX = '@experiments/table/mice';
const defaultState: MiceReducer = {
    filters: null,
};

export const actions = {
    setFilters: createAction<Partial<ExperimentMiceFilters>>(`${PREFIX}/SET_FILTERS`),
};

export default handleActions<MiceReducer, ActionType>({
    [actions.setFilters.toString()]: (
        state: MiceReducer,
        {payload}: Action<Partial<ExperimentMiceFilters>>,
    ): MiceReducer => ({
        ...state,
        filters: {
            ...state.filters,
            ...payload,
        },
    }),
}, defaultState);
