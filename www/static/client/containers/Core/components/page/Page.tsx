import {Layout} from 'antd';
import React from 'react';
import {Switch} from 'react-router';

import Header from 'client/components/Header';
import Menu from 'client/components/Menu';
import routes from 'client/routes';

import {CONTENT_MARGIN} from './consts';
import {
    contentLayoutStyles,
    contentStyles,
    mainLayoutStyles,
    LayoutWrapper,
} from './styles';
import {Props} from './types';

export default class Page extends React.PureComponent<Props> {
    public render() {
        const {login} = this.props;
        const isUserLogged = !!login;

        return (
            <LayoutWrapper>
                <Layout>
                    <Layout style={mainLayoutStyles}>
                        { isUserLogged && <Menu/> }
                        <Layout
                            style={{
                                ...contentLayoutStyles,
                                marginLeft: this.getContentMargin(isUserLogged),
                            }}
                        >
                            { isUserLogged ?<Header/> : null }
                            <Layout.Content style={contentStyles}>
                                <Switch children={routes}/>
                            </Layout.Content>
                        </Layout>
                    </Layout>
                </Layout>
            </LayoutWrapper>
        );
    }

    private getContentMargin = (isUserLogged: boolean) => {
        if (!isUserLogged) {
            return null;
        }

        const {menuUI: {isCollapse: isMenuCollapse}} = this.props;
        return isMenuCollapse ? CONTENT_MARGIN.COLLAPSE : CONTENT_MARGIN.EXPAND;
    };
}
