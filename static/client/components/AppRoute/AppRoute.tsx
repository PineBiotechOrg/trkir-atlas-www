import React from 'react';
import {Route, RouteComponentProps} from 'react-router';

import ErrorBoundry from 'client/components/ErrorBoundry';
import config from 'client/config/config';

import {Props} from './types';

export default class AppRoute extends React.Component<Props> {
    public render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {component, componentProps, ...props} = this.props;

        return (
            <Route
                {...props}
                render={this.renderContent}
            />
        );
    }

    private renderContent = (routerProps: RouteComponentProps) => {
        const {component: Component, componentProps} = this.props;
        const content = (
            <Component {...routerProps} {...componentProps}/>
        );

        return process.env.NODE_ENV === config.__DEV__
            ? (
                <ErrorBoundry>
                    { content }
                </ErrorBoundry>
            )
            : (
                <React.Fragment>
                    { content }
                </React.Fragment>
            );
    };
}
