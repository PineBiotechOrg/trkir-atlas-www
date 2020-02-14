import {Dropdown, Menu, Icon} from 'antd';
import React from 'react';

import {authCodeService} from 'client/services/AuthCodeService';

import {Props} from './types';

import {b} from './UserInfo.scss';

export default class UserInfo extends React.PureComponent<Props> {
    public render() {
        const {login} = this.props;

        return (
            <div className={b()}>
                <div className={b('avatar')}/>

                <Dropdown overlay={this.renderDropdownMenu}>
                    <span className={b('text')}>
                        { login }
                    </span>
                </Dropdown>
            </div>
        );
    }

    private renderDropdownMenu = () => {
        return (
            <Menu>
                <Menu.Item
                    key="logout"
                    onClick={authCodeService.logout}
                >
                    <span>
                        Logout <Icon type="logout"/>
                    </span>
                </Menu.Item>
            </Menu>
        );
    };
}
