import {Checkbox} from 'antd';
import {ColumnProps} from 'antd/lib/table';
import React from 'react';

import makeModel from 'client/utils/infrastructure/makeModel';

import {Mouse} from 'entity/mice';

export const COLUMNS: ColumnProps<Mouse>[] = [
    {
        title: (...args) => {
            // console.log(args);
            return (
                <React.Fragment>
                    <Checkbox/>
                </React.Fragment>
            );
        },
        render: (...args) => {
            // console.log('row', args);
            return (
                <Checkbox/>
            );
        },
        dataIndex: makeModel<Mouse>(m => m.id),
    },
    {
        title: 'Mouse',
        dataIndex: makeModel<Mouse>(m => m.name),
    },
    {
        title: 'Activity',
        dataIndex: makeModel<Mouse>(m => m.status),
    },
];
