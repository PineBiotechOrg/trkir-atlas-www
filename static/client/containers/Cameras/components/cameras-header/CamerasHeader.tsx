import {Button, Layout, PageHeader, Tooltip} from 'antd';
import React from 'react';

import {bound as commonActions} from 'client/actions';

import {ROOT_PATH} from '../../consts';

import {b} from './CamerasHeader.scss';

export default class CamerasHeader extends React.PureComponent {
    public render() {
        return (
            <Layout.Header className={b()}>
                <PageHeader
                    title="Cameras"
                    subTitle={(
                        <Tooltip title="Add new camera" placement="right">
                            <Button
                                icon="plus"
                                type="primary"
                                onClick={this.goToCreateForm}
                                size="small"
                            />
                        </Tooltip>
                    )}
                />
            </Layout.Header>
        );
    }

    private goToCreateForm = () => {
        commonActions.router.push(`${ROOT_PATH}/create`);
    }
}
