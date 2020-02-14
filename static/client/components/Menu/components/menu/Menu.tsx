import {Layout, Menu as AntdMenu} from 'antd';
import React from 'react';

import {sidebarService} from '../../service/SidebarService';
import MenuGroupItem from '../menu-group-item';
import {layoutSiderStyles, vendorMenuWrapperStyles} from './styles';
import {Props} from './types';

export default class Menu extends React.PureComponent<Props> {
    public render() {
        const {menuUI: {isCollapse}, menuGroups, activePaths} = this.props;

        return (
            <Layout.Sider
                style={layoutSiderStyles}
                collapsible
                collapsed={isCollapse}
                onCollapse={sidebarService.changeCollapseState}
            >
                <AntdMenu
                    mode="inline"
                    theme="dark"
                    style={vendorMenuWrapperStyles}
                    selectedKeys={activePaths}
                >
                    { menuGroups.map(
                        group => (
                            <MenuGroupItem
                                menuGroup={group}
                                activePaths={activePaths}
                                key={group.id}
                            />
                        ),
                    ) }
                </AntdMenu>
            </Layout.Sider>
        );
    }
}
