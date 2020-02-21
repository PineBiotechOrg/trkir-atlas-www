import {Dropdown, Menu, Icon, Button} from 'antd';
import {ColumnProps} from 'antd/lib/table';
import React from 'react';

import {bound as commonActions} from 'client/actions';
import {SimplePlot} from 'client/components/Plots';
import makeModel from 'client/utils/infrastructure/makeModel';

import {Mouse} from 'entity/mice';

import {ROOT_PATH} from '../../consts';
import {mockTableData} from './consts.mock';

// TODO: Переделать этот кусок
const goToMouse = (experimentId: number, mouseId: number) => () => {
    commonActions.router.push(`${ROOT_PATH}/experiment/${experimentId}/dashboard/mouse/${mouseId}`);
};

const renderDropdown = (experimentId: number, mouseId: number) => {
    const menu = (
        <Menu>
            <Menu.Item key="go_to_mouse" onClick={goToMouse(experimentId, mouseId)}>
                <span>
                    Go to mouse
                </span>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <Button size="large">
                Actions <Icon type="down"/>
            </Button>
        </Dropdown>
    );
};

// TODO: Update types and model
export const COLUMNS: ColumnProps<Mouse>[] = [
    {
        title: 'Preview',
        dataIndex: 'preview',
        render: () => (
            <img src="/images/mock-mouse.png" alt="mock mouse" width={300}/>
        ),
        width: 350,
    },
    {
        title: 'Status',
        dataIndex: makeModel<Mouse>(m => m.status),
        render: () => (
            <div>
                <p>some data 1</p>
                <p>Temp: 33,8C</p>
                <p>Activity: Semi</p>
                <p>Condition: Healthy</p>
            </div>
        ),
    },
    {
        title: 'Temperature',
        dataIndex: makeModel<Mouse>(m => m.date_start),
        render: () => (
            <div>
                <SimplePlot data={mockTableData}/>
            </div>
        ),
    },
    {
        title: 'Action',
        dataIndex: 'action',
        render: (text: any, {id, experiment}: Mouse, _: number) =>
            renderDropdown(experiment, id),
    },
];
