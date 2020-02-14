import {Button, Card, Icon} from 'antd';
import React from 'react';

import Logo from 'client/components/Logo';
import {authCodeService} from 'client/services/AuthCodeService';

import {b} from './Auth.scss';

const iconLogo = <Logo/>;

export default class Auth extends React.PureComponent {
    public render() {
        return (
            <section className={b()}>
                <Card
                    title={iconLogo}
                    extra="Log in"
                >
                    <Button
                        type="default"
                        size="large"
                        onClick={this.onGoogleOauth}
                    >
                        <Icon type="google"/>
                        Sign in with Google
                    </Button>
                </Card>
            </section>
        );
    }

    private onGoogleOauth = () => {
        authCodeService.handleSendGoogleData();
    }
}
