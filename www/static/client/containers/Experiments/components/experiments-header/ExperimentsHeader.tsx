import {Button, Layout, PageHeader, Tooltip} from 'antd';
import React from 'react';

import {bound as commonActions} from 'client/actions';

import {ROOT_PATH} from '../../consts';
import ExperimentsFilters from '../experiments-filters';

import {b} from './ExperimentsHeader.scss';

export default class ExperimentsHeader extends React.PureComponent {
    public render() {
        return (
            <Layout.Header className={b()}>
                <PageHeader
                    title="Experiments"
                    subTitle={(
                        <Tooltip title="Add new experiment" placement="right">
                            <Button
                                icon="plus"
                                type="primary"
                                onClick={this.goToCreateForm}
                                size="small"
                            />
                        </Tooltip>
                    )}
                />
                <ExperimentsFilters/>
            </Layout.Header>
        );
    }

    private goToCreateForm = () => {
        commonActions.router.push(`${ROOT_PATH}/create`);
    }
}
