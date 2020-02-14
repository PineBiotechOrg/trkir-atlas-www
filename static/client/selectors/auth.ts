import {createSelector} from 'reselect';

import {Status} from 'client/types/infrastructure/common';
import {CommonStore} from 'client/utils/infrastructure/store';

export const getStatus = createSelector(
    (state: CommonStore) => state?.auth?.status,
    (status: Status) => status,
);

export const getClientID = createSelector (
    (state: CommonStore) => state?.google?.clientId,
    (clientId: string) => clientId,
);
