import {createSelector} from 'reselect';

import {CommonStore} from 'client/utils/infrastructure/store';

import {CamerasList} from 'entity/cameras';

export const camerasSelector = createSelector(
    (state: CommonStore) => state?.camerasList,
    (list: CamerasList) => (list || []),
);
