import React from 'react';

import {b} from './DrawerFooter.scss';

export default class DrawerFooter extends React.PureComponent {
    public render() {
        return (
            <div className={b()}>
                { this.props.children }
            </div>
        );
    }
}
