import identity from 'lodash/identity';
import {createSelector} from 'reselect';

import {CommonStore} from 'client/utils/infrastructure/store';

export const menuCollapseState = createSelector(
    (state: CommonStore) => state.menu.ui.isCollapse,
    identity,
);
