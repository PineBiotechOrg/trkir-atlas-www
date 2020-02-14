import {Breadcrumb, Layout, PageHeader} from 'antd';
import React from 'react';

import RouteLink from 'client/components/RouteLink';

import {ROOT_PATH} from '../../consts';
import DashboardFilters from '../dashboard-filters';
import {Props} from './types';

import {b} from './DashboardHeader.scss';

export default class DashboardHeader extends React.PureComponent<Props> {
    public render() {
        return (
            <Layout.Header className={b()}>
                <PageHeader title={this.renderTitle()}/>
                <DashboardFilters/>
            </Layout.Header>
        );
    }

    private renderTitle = () => {
        const {item} = this.props;

        return (
            <Breadcrumb separator=">">
                <Breadcrumb.Item>
                    <RouteLink url={ROOT_PATH}>
                        Dashboard
                    </RouteLink>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                    {item?.title}
                </Breadcrumb.Item>
            </Breadcrumb>
        );
    };
}
