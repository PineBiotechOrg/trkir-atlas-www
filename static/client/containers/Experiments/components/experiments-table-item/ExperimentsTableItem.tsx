import React from 'react';

import ExperimentsTableItemFilters from '../experiments-table-item-filters';
import MicePCA from '../mice-pca';
import {Props} from './types';

export default class ExperimentsTableItem extends React.PureComponent<Props> {
    public render() {
        const {id} = this.props;

        return (
            <React.Fragment>
                <ExperimentsTableItemFilters id={id}/>

                <MicePCA/>
            </React.Fragment>
        );
    }
}
