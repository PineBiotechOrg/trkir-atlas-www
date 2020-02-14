import {Icon, Menu as AntdMenu} from 'antd';
import React, {PureComponent} from 'react';

import {bound as commonActions} from 'client/actions';
import RouteLink from 'client/components/RouteLink';

import getLongTextWithTooltip from '../../utils/getLongTextWithTooltip';
import {Props} from './types';

export default class MenuItem extends PureComponent<Props> {
    public render() {
        const {item: {url}, ...menuProps} = this.props;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {dispatch, ...vendorToolbarProps} = menuProps;

        return (
            <AntdMenu.Item
                {...vendorToolbarProps}
                key={url}
                onClick={this.onItemClick}
            >
                { this.renderItem() }
            </AntdMenu.Item>
        );
    }

    private renderItem = () => {
        const {item: {title, icon, url}, menuUI: {isCollapse}} = this.props;

        return (
            <RouteLink url={url}>
                { icon && <Icon type={icon}/> }
                {
                    !isCollapse
                        ? getLongTextWithTooltip(title)
                        : <span>{ title }</span>
                }
            </RouteLink>
        );
    };

    private onItemClick = () => {
        const {item: {url}} = this.props;
        commonActions.router.push(url);
        commonActions.menu.sidebar.setActive(url);
    };
}
