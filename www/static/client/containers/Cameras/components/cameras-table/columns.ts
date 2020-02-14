import {ColumnProps} from 'antd/lib/table';

import makeModel from 'client/utils/infrastructure/makeModel';

import {Camera} from 'entity/cameras';

export const COLUMNS: ColumnProps<Camera>[] = [
    {
        title: 'Title',
        dataIndex: makeModel<Camera>(m => m.name),
    },
    {
        title: 'User',
        dataIndex: makeModel<Camera>(m => m.user),
    },
    {
        title: 'IP',
        dataIndex: makeModel<Camera>(m => m.ip),
    },
    {
        title: 'Status',
        dataIndex: makeModel<Camera>(m => m.status),
    },
    {
        title: 'Place',
        dataIndex: makeModel<Camera>(m => m.place),
    },
];
