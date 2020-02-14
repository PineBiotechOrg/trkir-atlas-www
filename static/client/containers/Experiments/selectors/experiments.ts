import {createSelector} from 'reselect';

import {experimentMiceSelector} from 'client/selectors/mice';

import {Experiments, ExperimentFilters} from 'entity/experiments';
import {Mice} from 'entity/mice';

import {BundleState} from '../types';

export const experimentsSelector = createSelector(
    (state: BundleState) => state?.experiments?.list,
    (list: Experiments) => (list || []),
);

export const filteredMiceSelector = createSelector(
    experimentMiceSelector,
    (state: BundleState) => state?.experiments?.table.mice.filters,
    (items: Mice, filters: Partial<ExperimentFilters>) => {
        const list = (items || []);

        return Boolean(filters?.name)
            ? list.filter(({name}) => name.toLowerCase().includes((filters?.name || '').toLowerCase()))
            : list;
    },
);
