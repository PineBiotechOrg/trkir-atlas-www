import React from 'react';

import ExperimentsHeader from '../experiments-header';
import ExperimentsTable from '../experiments-table';

export default class Experiments extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <ExperimentsHeader/>

                <ExperimentsTable/>
            </React.Fragment>
        );
    }
}
