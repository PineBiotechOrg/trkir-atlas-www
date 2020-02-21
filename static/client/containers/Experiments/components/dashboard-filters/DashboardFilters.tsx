import {Form, Input, Dropdown, Button, Icon, Menu} from 'antd';
import React from 'react';

import {bound as actions} from '../../actions';
import StatusActions from '../status-actions';
import {Props} from './types';

import {b} from './DashboardFilters.scss';

export default class DashboardFilters extends React.PureComponent<Props> {
    public render() {
        const {item} = this.props;

        return (
            <div className={b()}>
                <Form.Item>
                    <StatusActions id={`${item?.id || ''}`}/>
                </Form.Item>
                
                &nbsp;

                <Form.Item className={b('item')}>
                    <Input.Search
                        size="large"
                        placeholder="Search"
                        onChange={this.handleSearch}
                    />
                </Form.Item>

                &nbsp;
                
                <Form.Item className={b('item')}>
                    <Dropdown overlay={this.renderDropdownActions()}>
                        <Button size="large">
                            Actions <Icon type="down"/>
                        </Button>
                    </Dropdown>
                </Form.Item>
            </div>
        );
    }

    private renderDropdownActions = () => {
        return (
            <Menu>
                <Menu.Item>
                    <span>Add comment</span>
                </Menu.Item>

                <Menu.Item>
                    <span>Edit experiment</span>
                </Menu.Item>

                <Menu.Item>
                    <span>Export data</span>
                </Menu.Item>
            </Menu>
        );
    };

    private handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        actions.tableActions.miceActions.setFilters({
            name: event.target.value,
        });
    };
}
