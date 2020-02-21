import {MenuGroup, NavigationMenuGroups} from './types';

export const navigationMenuItems: NavigationMenuGroups = [
    {
        id: MenuGroup.Library,
        title: 'Library',
        icon: 'database',
        items: [],
    },
    {
        id: MenuGroup.Cameras,
        title: 'Cameras',
        icon: 'video-camera',
        items: [],
    },
];

export const MAX_MENU_ITEM_TITLE_LENGTH = 15;
