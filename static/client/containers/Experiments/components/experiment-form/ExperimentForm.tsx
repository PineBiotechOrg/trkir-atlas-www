import {Button, Drawer, Form, Input} from 'antd';
import React from 'react';

import {bound as commonActions} from 'client/actions';
import DrawerFooter from 'client/components/DrawerFooter';

import {ROOT_PATH} from '../../consts';
import {experimentsService} from '../../services/ExperimentsService';
import {Model, Props} from './types';

import {b} from './ExperimentForm.scss';

export default class ExperimentForm extends React.PureComponent<Props> {
    public render() {
        const {form: {getFieldDecorator}} = this.props;

        return (
            <Drawer
                title="Create experiment"
                onClose={this.goToTable}
                width="50vw"
                closable
                visible
            >
                <Form className={b()} onSubmit={this.handleSubmit}>
                    <Form.Item label="Title">
                        { getFieldDecorator<Model>('title', {
                            rules: [{required: true}],
                            initialValue: '',
                        })(
                            <Input placeholder="Title of experiment"/>,
                        ) }
                    </Form.Item>

                    <Form.Item label="Description">
                        { getFieldDecorator<Model>('description', {
                            initialValue: '',
                        })(
                            <Input.TextArea placeholder="About..."/>,
                        ) }
                    </Form.Item>

                    <Form.Item label="Place">
                        { getFieldDecorator<Model>('place', {
                            initialValue: '',
                        })(
                            <Input placeholder="Harvard"/>,
                        ) }
                    </Form.Item>

                    <DrawerFooter>
                        <Button htmlType="submit" type="primary">
                            Create
                        </Button>
                    </DrawerFooter>
                </Form>
            </Drawer>
        );
    }

    private goToTable = () => {
        commonActions.router.push(ROOT_PATH);
    };

    private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {form, id} = this.props;

        form.validateFields((errors, values) => {
            if (!errors) {
                experimentsService.createOrUpdate(values, id);
            }
        });
    };
}
