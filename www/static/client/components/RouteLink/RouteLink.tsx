import React, {PureComponent} from 'react';

import {bound as commonActions} from 'client/actions';

import {Props} from './types';

import {b} from './RouteLink.scss';


export default class RouteLink extends PureComponent<Props> {
    public render() {
        const {children} = this.props;

        return (
            <a onClick={this.onClick} className={b()}>
                { children }
            </a>
        );
    }

    private onClick = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.stopPropagation();

        const {url} = this.props;
        commonActions.router.push(url);
    };
}
