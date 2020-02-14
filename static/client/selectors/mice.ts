import {createSelector} from 'reselect';

import {CommonStore} from 'client/utils/infrastructure/store';

import {Mice} from 'entity/mice';

export const miceSelector = createSelector(
    (state: CommonStore) => state.mice,
    (list: Mice) => (list || []),
);

export const experimentMiceSelector = createSelector(
    (state: CommonStore) => state.commonExperiments?.item?.mice,
    (item: Mice) => (item || []),
);

