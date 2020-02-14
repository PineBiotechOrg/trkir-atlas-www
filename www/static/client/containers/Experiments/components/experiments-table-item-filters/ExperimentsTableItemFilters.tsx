import {Button, Form, Input, Tooltip, Icon} from 'antd';
import React from 'react';

import {bound as commonActions} from 'client/actions';

import {bound as actions} from '../../actions';
import {ROOT_PATH} from '../../consts';
import StatusActions from '../status-actions';
import {textFilterStyles} from './styles';
import {Props} from './types';

import {b} from './ExperimentsTableItemFilters.scss';

export default class ExperimentsTableItemFilters extends React.PureComponent<Props> {
    public render() {
        const {id} = this.props;

        return (
            <Form>
                <Form.Item className={b('item')}>
                    <Tooltip title="Add mouse" placement="bottom">
                        <Button
                            icon="plus"
                            onClick={this.goToAddMiceForm}
                            size="large"
                        />
                    </Tooltip>
                </Form.Item>

                &nbsp;

                <Form.Item className={b('item')}>
                    <Input.Search
                        size="large"
                        placeholder="Search" style={textFilterStyles}
                        onChange={this.handleSearch}
                    />
                </Form.Item>

                &nbsp;

                <Form.Item className={b('item')}>
                    <StatusActions id={id}/>
                </Form.Item>

                <div className={b('itemActions')}>
                    <Form.Item className={b('item')}>
                        <Button
                            icon="export"
                            size="large"
                            disabled
                        >
                            Export
                        </Button>

                        &nbsp;

                        <Button
                            onClick={this.goToDashboard}
                            size="large"
                            type="primary"
                        >
                            Dashboard <Icon type="right"/>
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        );
    }

    private goToDashboard = () => {
        const {id} = this.props;
        commonActions.router.push(`${ROOT_PATH}/experiment/${id}/dashboard`);
    };

    private handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        actions.tableActions.miceActions.setFilters({
            name: event.target.value,
        });
    };

    private goToAddMiceForm = () => {
        const {id} = this.props;
        commonActions.router.push(`${ROOT_PATH}/${id}/add-mice`);
    };
}
