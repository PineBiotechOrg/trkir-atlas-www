import identity from 'lodash/identity';
import {createSelector} from 'reselect';

import {CommonStore} from 'client/utils/infrastructure/store';

export const cameraImageSelector = createSelector(
    (state: CommonStore) => state.cameraStreaming,
    identity,
);
