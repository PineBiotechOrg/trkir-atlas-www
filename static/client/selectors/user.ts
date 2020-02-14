import {createSelector} from 'reselect';

import {CommonStore} from 'client/utils/infrastructure/store';

export const userLoginSelector = createSelector(
    (state: CommonStore) => state.auth?.info?.login,
    (login: string | undefined) => login || '',
);
