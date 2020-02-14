import {Form, Input} from 'antd';
import React from 'react';

import StatusActions from '../status-actions';
import {Props} from './types';

import {b} from './DashboardFilters.scss';

export default class DashboardFilters extends React.PureComponent<Props> {
    public render() {
        const {item} = this.props;

        return (
            <Form className={b()}>
                <Form.Item>
                    <StatusActions id={`${item?.id || ''}`}/>
                </Form.Item>

                <Form.Item>
                    <Input.Search placeholder="Enter the text..."  size="large" disabled/>
                </Form.Item>
            </Form>
        );
    }
}
