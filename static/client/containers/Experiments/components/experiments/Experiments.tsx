import React from 'react';

import ExperimentsTable from '../experiments-table';

export default class Experiments extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <ExperimentsTable/>
            </React.Fragment>
        );
    }
}
