import {Form, Input, Select, Modal, Row, Col} from 'antd';
import React from 'react';

import {bound as commonActions} from 'client/actions';

import {ROOT_PATH} from '../../consts';
import {experimentsService} from '../../services/ExperimentsService';
import {Model, Props} from './types';

import {b} from './TableMouseForm.scss';

export default class TableMouseForm extends React.PureComponent<Props> {
    public render() {
        const {form: {getFieldDecorator}, cameras} = this.props;

        return (
            <Modal
                title="Add mouse to experiment"
                onCancel={this.goToTable}
                onOk={this.handleSubmit}
                okText="Add mouse"
                closable
                visible
            >
                <Form>
                    <Form.Item label="Name">
                        { getFieldDecorator<Model>('name', {
                            rules: [{required: true}],
                        })(
                            <Input placeholder="Mouse name"/>,
                        ) }
                    </Form.Item>

                    <Form.Item label="Camera">
                        { getFieldDecorator<Model>('camera', {
                            rules: [{required: true}],
                        })(
                            <Select placeholder="Select camera" optionLabelProp="title">
                                {cameras.map(({id, name, ip}) => (
                                    <Select.Option key={`${id}_${name}`} value={id} title={name}>
                                        <Row gutter={16}>
                                            <Col span={12}>
                                                <p>{name}</p>
                                            </Col>
                                            <Col span={12}>
                                                <p className={b('cameraText', {ip: true})}>{ip}</p>
                                            </Col>
                                        </Row>
                                    </Select.Option>
                                ))}
                            </Select>,
                        ) }
                    </Form.Item>
                </Form>
            </Modal>
        );
    }

    private goToTable = () => {
        commonActions.router.push(ROOT_PATH);
    };

    private handleSubmit = (event: React.MouseEvent) => {
        event.preventDefault();
        const {form, id} = this.props;

        form.validateFields((errors, values) => {
            if (!errors) {
                experimentsService.addMouseToExperiment(id, values);
            }
        });
    };
}
