import React from 'react';

import TRKIRLogo from 'client/components/Logo';

import {b} from './Logo.scss';

export default class Logo extends React.PureComponent {
    public render() {
        return (
            <div className={b()}>
                <TRKIRLogo/>
            </div>
        );
    }
}
