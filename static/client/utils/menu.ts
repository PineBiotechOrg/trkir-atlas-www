import {navigationMenuItems} from 'client/components/Menu/consts';
import {
    MenuGroup,
    NavigationMenuItem,
    NavigationMenuItems,
} from 'client/components/Menu/types';

type NavMenuItem = NavigationMenuItem | NavigationMenuItems;

export const extendMenu = (id: MenuGroup, navMenuItem: NavMenuItem) => {
    const group = navigationMenuItems.find(g => g.id === id);
    if (!group) {
        return;
    }

    if (!group.items) {
        group.items = [];
    }

    const extention = Array.isArray(navMenuItem) ? navMenuItem : [navMenuItem];
    group.items.push(...extention);
};
