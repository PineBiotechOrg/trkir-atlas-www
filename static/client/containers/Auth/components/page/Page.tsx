import React from 'react';

import Auth from '../auth';
import {Props} from './types';

export default class Page extends React.PureComponent<Props> {
    public static pageTitle = 'Autorization';
    public static pagename = 'auth';

    public render() {
        return (
            <React.Fragment>
                <Auth/>
            </React.Fragment>
        );
    }
}
