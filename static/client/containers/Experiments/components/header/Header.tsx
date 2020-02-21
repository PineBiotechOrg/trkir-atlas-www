import {Breadcrumb, Layout, PageHeader} from 'antd';
import React from 'react';

import RouteLink from 'client/components/RouteLink';
import clipText from 'client/utils/clipText';

import {ROOT_PATH} from '../../consts';
import {Props} from './types';

import {b} from './Header.scss';

export default class Header extends React.PureComponent<Props> {
    public render() {
        const {children, extra} = this.props;

        return (
            <Layout.Header className={b()}>
                <PageHeader title={this.renderTitle()} subTitle={extra}/>

                {children}
            </Layout.Header>
        );
    }

    private renderTitle = () => {
        const {experiment, id, mouseId} = this.props;

        return (
            <Breadcrumb separator=">">
                <Breadcrumb.Item>
                    <RouteLink url={ROOT_PATH}>
                        Experiments
                    </RouteLink>
                </Breadcrumb.Item>

                {id && (
                    <Breadcrumb.Item>
                        <RouteLink url={`${ROOT_PATH}/experiment/${experiment?.id}/dashboard`}>
                            {clipText(experiment?.title || '')}
                        </RouteLink>
                    </Breadcrumb.Item>
                )}

                {mouseId && (
                    <Breadcrumb.Item>
                        <RouteLink url={`${ROOT_PATH}/experiment/${experiment?.id}/dashboard/mouse/${mouseId}`}>
                            {mouseId}
                        </RouteLink>
                    </Breadcrumb.Item>
                )}
            </Breadcrumb>
        );
    };
}
