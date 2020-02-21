import {Table} from 'antd';
import {TableEventListeners} from 'antd/lib/table/interface';
import React from 'react';

import {bound as commonActions} from 'client/actions';

import {Camera} from 'entity/cameras';

import {ROOT_PATH} from '../../consts';
import {COLUMNS} from './columns';
import {Props} from './types';

import {b} from './CamerasTable.scss';

export default class CamerasTable extends React.PureComponent<Props> {
    public render() {
        const {cameras} = this.props;

        return (
            <div className={b()}>
                <Table<Camera>
                    dataSource={cameras}
                    columns={COLUMNS}
                    rowClassName={this.getRowClassName}
                    onRow={this.makeRowProps}
                />
            </div>
        );
    }

    private getRowClassName = () => {
        return b('tableRow');
    };

    private makeRowProps = (record: Camera, _: number): TableEventListeners => {
        const onClick = this.handleClickOnRow(record.id);

        return {
            onClick,
        };
    };

    private handleClickOnRow = (id: number) => {
        return (event: React.MouseEvent) => {
            event.preventDefault();
            commonActions.router.push(`${ROOT_PATH}/camera/${id}`);
        };
    }
}
