import {createSelector} from 'reselect';

import {CommonStore} from 'client/utils/infrastructure/store';

export const getLogin = createSelector(
    (state: CommonStore) => state?.auth?.info?.login,
    (login: string) => login,
);
