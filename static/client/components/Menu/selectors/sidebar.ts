import orderBy from 'lodash/orderBy';
import {createSelector} from 'reselect';

import {CommonStore} from 'client/utils/infrastructure/store';

import {NavigationMenuGroups} from '../types';
import {menuGroupsSelector} from './sections';

export const activePathSelector = createSelector(
    (state: CommonStore) => state.menu?.sidebar?.activePath,
    menuGroupsSelector,
    (activePath: string, menuGroups: NavigationMenuGroups) => {
        if (activePath === '/') {
            return [];
        }

        return menuGroups.reduce((result, current) => {
            const path = orderBy(current.items, [item => item.url.length], ['desc'])
                .find(item => activePath.startsWith(item.url));
            if (path) {
                return [...result, path.url, current.id];
            }

            return [...result];
        }, []);
    },
);
