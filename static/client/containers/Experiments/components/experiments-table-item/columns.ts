import {ColumnProps} from 'antd/lib/table';

import makeModel from 'client/utils/infrastructure/makeModel';

import {Mouse} from 'entity/mice';

export const COLUMNS: ColumnProps<Mouse>[] = [
    {
        title: 'Mouse',
        dataIndex: makeModel<Mouse>(m => m.name),
    },
    {
        title: 'Activity',
        dataIndex: makeModel<Mouse>(m => m.status),
    },
];
