import {createSelector} from 'reselect';

import {CommonStore} from 'client/utils/infrastructure/store';

import {PDList} from './types';

export const listSelector = <PD>(id: string) => createSelector(
    (state: CommonStore) => state.plots[id]?.items,
    (items: PDList<PD>) => (items || []),
);

export const errorSelector = <PD>(id: string) => createSelector(
    (state: CommonStore) => state.plots[id]?.error,
    (error: string) => error,
);
