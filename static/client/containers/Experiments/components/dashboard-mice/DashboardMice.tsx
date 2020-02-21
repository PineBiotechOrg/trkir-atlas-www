import React from 'react';

import DashboardMiceFilters from '../dashboard-mice-filters';
import DashboardMiceTable from '../dashboard-mice-table';

export default class DashboardMice extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <DashboardMiceFilters/>

                <DashboardMiceTable/>
            </React.Fragment>
        );
    }
}
