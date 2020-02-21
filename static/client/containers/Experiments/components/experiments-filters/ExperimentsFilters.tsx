import {DatePicker, Form, Input, Radio} from 'antd';
import React from 'react';

import {API_DATE_FORMAT} from 'client/utils/date';

import {bound as actions} from '../../actions';
import {EXPERIMENT_STATUSES} from './consts';

import {b} from './ExperimentsFilters.scss';

export default class ExperimentsFilters extends React.PureComponent {
    public render() {
        return (
            <Form className={b()}>
                <Form.Item>
                    <Radio.Group size="large" disabled>
                        { EXPERIMENT_STATUSES.map(({label, id}) => (
                            <Radio.Button value={id} key={id}>
                                { label }
                            </Radio.Button>
                        )) }
                    </Radio.Group>
                </Form.Item>

                <Form.Item>
                    <DatePicker.RangePicker format={API_DATE_FORMAT} size="large" disabled/>
                </Form.Item>

                <Form.Item>
                    <Input.Search
                        placeholder="Enter the text..."
                        size="large"
                        onChange={this.handleSearch}
                    />
                </Form.Item>
            </Form>
        );
    }

    private handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        actions.tableActions.experiments.setFilters({
            title: event.target.value,
        });
    };
}
