import {SubMenuProps} from 'antd/lib/menu/SubMenu';
import {DispatchProp} from 'react-redux';

import {NavigationMenuGroup} from '../../types';

export interface OwnProps {
    menuGroup: NavigationMenuGroup;
    activePaths: string[];
}

export interface StateProps {
    menuUI: {
        isCollapse: boolean;
    };
}

export type Props = StateProps & OwnProps & SubMenuProps & DispatchProp<any>;
