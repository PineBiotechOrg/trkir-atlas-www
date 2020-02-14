import {MenuItemProps} from 'antd/lib/menu/MenuItem';
import {DispatchProp} from 'react-redux';

import {NavigationMenuItem} from '../../types';

export interface OwnProps {
    item: NavigationMenuItem;
}

export interface StateProps {
    menuUI: {
        isCollapse: boolean;
    };
}

export type Props = StateProps & OwnProps & MenuItemProps & DispatchProp<any>;
