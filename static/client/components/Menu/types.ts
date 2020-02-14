export const enum MenuGroup {
    Library = 'library',
}

export interface NavigationMenuItem {
    url: string;
    title: string;
    permissions?: string[];
    icon?: string; // name of antd icon
    isAdminOnly?: boolean;
}

export type NavigationMenuItems = NavigationMenuItem[];

export interface NavigationMenuGroup {
    id: MenuGroup;
    title: string;
    icon: string; // name of antd icon
    items: NavigationMenuItems;
}

export type NavigationMenuGroups = NavigationMenuGroup[];
