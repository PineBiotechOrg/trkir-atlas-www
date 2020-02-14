import {createSelector} from 'reselect';

import {Camera} from 'entity/cameras';

import {BundleState} from '../types';

export const cameraSelector = createSelector(
    (state: BundleState) => state?.cameras?.item,
    (item: Camera) => (item || {} as Camera),
);
