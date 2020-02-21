import React from 'react';

import DashboardMice from '../dashboard-mice';
import MicePCA from '../mice-pca';

export default class Dashboard extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <MicePCA/>

                <DashboardMice/>
            </React.Fragment>
        );
    }
}
