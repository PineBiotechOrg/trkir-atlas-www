import {Col, Row, Table} from 'antd';
import React from 'react';

import {Mouse} from 'entity/mice';

import ExperimentsTableItemFilters from '../experiments-table-item-filters';
import ExperimentsTableItemPca from '../experiments-table-item-pca';
import {COLUMNS} from './columns';
import {Props} from './types';

export default class ExperimentsTableItem extends React.PureComponent<Props> {
    public render() {
        const {id, mice} = this.props;

        return (
            <React.Fragment>
                <ExperimentsTableItemFilters id={id}/>

                <Row gutter={16}>
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
            </React.Fragment>
        );
    }
}
