import {Form, Input} from 'antd';
import React from 'react';

import {bound as actions} from '../../actions';
import {Props} from './types';

import {b} from './DashboardMiceFilters.scss';

export default class DashboardMiceFilters extends React.PureComponent<Props> {
    public render() {
        const {lengthMice} = this.props;

        return (
            <React.Fragment>
                <span>Mice ({lengthMice})</span>

                <Form className={b('wrapper')}>
                    <Form.Item className={b('item')}>
                        <Input.Search
                            size="large"
                            placeholder="Search..."
                            onChange={this.handleSearch}
                        />
                    </Form.Item>
                </Form>
            </React.Fragment>
        );
    }

    private handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        actions.tableActions.miceActions.setFilters({
            name: event.target.value,
        });
    };
}
