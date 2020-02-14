import {Layout} from 'antd';
import React from 'react';

import Logo from '../logo';
import UserInfo from '../user-info';

import {b} from './Header.scss';

export default class Header extends React.PureComponent {
    public render() {
        return (
            <Layout.Header className={b('wrapper')}>
                <Logo/>

                <UserInfo/>
            </Layout.Header>
        );
    }
}
