import {createSelector} from 'reselect';

import {CommonStore} from 'client/utils/infrastructure/store';

import {Experiments, Experiment} from 'entity/experiments';

export const experimentsSelector = createSelector(
    (state: CommonStore) => state?.commonExperiments?.list,
    (list: Experiments) => (list || []),
);

export const experimentSelector = createSelector(
    (state: CommonStore) => state?.commonExperiments?.item,
    (item: Experiment) => (item || {} as Experiment),
);
