import {Col, Row, Table} from 'antd';
import React from 'react';

import {Mouse} from 'entity/mice';

import ExperimentsTableItemPca from '../experiments-table-item-pca';
import {COLUMNS} from './columns';
import {Props} from './types';

import {b} from './MicePCA.scss';

export default class MicePCA extends React.PureComponent<Props> {
    public render() {
        const {mice} = this.props;

        return (
            <Row gutter={16} className={b()}>
                <Col span={10}>
                    <Table<Mouse>
                        columns={COLUMNS}
                        dataSource={mice}
                    />
                </Col>

                <Col span={14}>
                    <ExperimentsTableItemPca/>
                </Col>
            </Row>
        );
    }
}
