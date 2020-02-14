import {Button, Drawer, Form, Input} from 'antd';
import React from 'react';

import {bound as commonActions} from 'client/actions';

import DrawerFooter from '../../../../components/DrawerFooter';
import {ROOT_PATH} from '../../consts';
import {camerasService} from '../../services/CamerasService';
import {Model, Props} from './types';

export default class CameraForm extends React.PureComponent<Props> {
    public render() {
        const {
            form: {getFieldDecorator},
            item,
        } = this.props;

        return (
            <Drawer
                title={`${this.getModeText()} camera`}
                onClose={this.goToTable}
                width="50vw"
                closable
                visible
            >
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item label="Title" help="Camera 01">
                        { getFieldDecorator<Model>('name', {
                            initialValue: item?.name,
                        })(
                            <Input/>,
                        ) }
                    </Form.Item>

                    <Form.Item label="IP" help="84.121.65.12">
                        { getFieldDecorator<Model>('ip', {
                            initialValue: item?.ip,
                        })(
                            <Input/>,
                        ) }
                    </Form.Item>

                    <Form.Item label="Place" help="Some place where experiment will be start">
                        { getFieldDecorator<Model>('place', {
                            initialValue: item?.place,
                        })(
                            <Input placeholder="Harvard University"/>,
                        ) }
                    </Form.Item>

                    <DrawerFooter>
                        <Button htmlType="submit" type="primary">
                            {this.getModeText()}
                        </Button>
                    </DrawerFooter>
                </Form>
            </Drawer>
        );
    }

    private getModeText = () => {
        const {id} = this.props;

        return Boolean(id) ? 'Update' : 'Create';
    }

    private goToTable = () => {
        commonActions.router.push(ROOT_PATH);
    };

    private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {form, id} = this.props;

        form.validateFields((errors, values) => {
            if (!errors) {
                if (id) {
                    camerasService.updateCamera(id, values);
                    return;
                }

                camerasService.createCamera(values);
            }
        });
    };
}
