import {createSelector} from 'reselect';

import {experimentMiceSelector} from 'client/selectors/mice';

import {ExperimentFilters, ExperimentMiceFilters, Experiments} from 'entity/experiments';
import {Mice} from 'entity/mice';

import {BundleState} from '../types';

export const experimentsSelector = createSelector(
    (state: BundleState) => state?.experiments?.list,
    (list: Experiments) => (list || []),
);

export const filteredExperimentsSelector = createSelector(
    experimentsSelector,
    (state: BundleState) => state?.experiments?.table.experiments.filters,
    (items: Experiments, filters: Partial<ExperimentFilters>) => {
        const list = (items || []);

        return Boolean(filters?.title)
            ? list.filter(({title}) => title.toLowerCase().includes((filters?.title || '').toLowerCase()))
            : list;
    },
);

export const filteredMiceSelector = createSelector(
    experimentMiceSelector,
    (state: BundleState) => state?.experiments?.table.mice.filters,
    (items: Mice, filters: Partial<ExperimentMiceFilters>) => {
        const list = (items || []);

        return Boolean(filters?.name)
            ? list.filter(({name}) => name.toLowerCase().includes((filters?.name || '').toLowerCase()))
            : list;
    },
);

export const lengthOfFilteredMiceSelector = createSelector(
    filteredMiceSelector,
    (items: Mice) => (items || []).length,
);
