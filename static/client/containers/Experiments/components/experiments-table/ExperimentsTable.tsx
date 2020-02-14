import {Table as VendorTable} from 'antd';
import React from 'react';

import {Experiment} from 'entity/experiments';

import ExperimentsTableItem from '../experiments-table-item';
import {COLUMNS} from './columns';
import {Props} from './types';

export default class ExperimentsTable extends React.PureComponent<Props> {
    public render() {
        const {items} = this.props;

        return (
            <React.Fragment>
                <VendorTable <Experiment>
                    columns={COLUMNS}
                    dataSource={items}
                    expandedRowRender={this.renderExpandedRow}
                />
            </React.Fragment>
        );
    }

    private renderExpandedRow = ({id}: Experiment) => (
        <ExperimentsTableItem id={id}/>
    );
}
