import {ColumnProps} from 'antd/lib/table';
import React from 'react';

import RouteLink from 'client/components/RouteLink';
import makeModel from 'client/utils/infrastructure/makeModel';

import {Experiment} from 'entity/experiments';

import {ROOT_PATH} from '../../consts';

export const COLUMNS: ColumnProps<Experiment>[] = [
    {
        title: 'Title',
        dataIndex: makeModel<Experiment>(m => m.title),
    },
    {
        title: 'Status',
        dataIndex: makeModel<Experiment>(m => m.status),
    },
    {
        title: 'Start',
        dataIndex: makeModel<Experiment>(m => m.date_start),
    },
    {
        title: 'Finish',
        dataIndex: makeModel<Experiment>(m => m.date_end),
    },
    {
        title: 'Action',
        dataIndex: 'action',
        render: (text: any, {id}: Experiment, _: number) => (
            <RouteLink url={`${ROOT_PATH}/experiment/${id}/dashboard`}>
                Go to dashboard
            </RouteLink>
        ),
    },
];
