import {NavigationMenuGroups} from '../../types';

export interface StateProps {
    menuGroups: NavigationMenuGroups;
    activePaths: string[];
    menuUI: {
        isCollapse: boolean;
    };
}

export type Props = StateProps;
