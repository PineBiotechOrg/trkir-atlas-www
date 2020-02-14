import {Icon, Menu as AntdMenu} from 'antd';
import React from 'react';

import getLongTextWithTooltip from '../../utils/getLongTextWithTooltip';
import MenuItem from '../menu-item';
import {Props} from './types';

import {b} from './MenuGroupItem.scss';


export default function MenuGroupItem(props: Props) {
    const {menuGroup, activePaths, menuUI: {isCollapse}, ...menuProps} = props;
    const {id, icon, title, items} = menuGroup;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {dispatch, ...vendorToolbarProps} = menuProps;

    return (
        <AntdMenu.SubMenu
            {...vendorToolbarProps}
            key={id}
            title={(
                <span>
                    <Icon type={icon}/>
                    {
                        !isCollapse
                            ? getLongTextWithTooltip(title)
                            : <span>{ title }</span>
                    }
                </span>
            )}
            className={activePaths.includes(id) && b('active')}
        >
            { items.map(item => <MenuItem item={item} key={item.url}/>) }
        </AntdMenu.SubMenu>
    );
}
