import identity from 'lodash/identity';
import {createSelector} from 'reselect';

import {CommonStore} from 'client/utils/infrastructure/store';

import {navigationMenuItems} from '../consts';

export const menuGroupsSelector = createSelector(
    (_: CommonStore) => navigationMenuItems,
    identity,
);
