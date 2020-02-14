import React from 'react';

import {b} from './Logo.scss';

export default function Logo() {
    return (
        <div className={b()}>
            <span className={b('text')}>TRKIR</span>
        </div>
    );
}
