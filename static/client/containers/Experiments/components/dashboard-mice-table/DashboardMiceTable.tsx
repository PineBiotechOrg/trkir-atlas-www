import {Table as VendorTable} from 'antd';
import React from 'react';

import {Mouse} from 'entity/mice';

import {COLUMNS} from './columns';
import {Props} from './types';

export default class DashboardMiceTable extends React.PureComponent<Props> {
    public render() {
        const {mice} = this.props;

        return (
            <React.Fragment>
                <VendorTable<Mouse>
                    columns={COLUMNS}
                    dataSource={mice}
                    pagination={false}
                />
            </React.Fragment>
        );
    }
}
