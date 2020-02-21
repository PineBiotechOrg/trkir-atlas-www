import {Button, Tooltip} from 'antd';
import React from 'react';

import {bound as commonActions} from 'client/actions';
import {Modes} from 'client/types/infrastructure/form';

import {ROOT_PATH} from '../../consts';
import {PageType} from '../../types';
import Dashboard from '../dashboard';
import DashboardFilters from '../dashboard-filters';
import ExperimentForm from '../experiment-form';
import Experiments from '../experiments';
import ExperimentsFilters from '../experiments-filters';
import Header from '../header';
import Mouse from '../mouse';
import TableMouseForm from '../table-mouse-form';
import {Props} from './types';

export default class Page extends React.PureComponent<Props> {
    public static pageTitle = 'Experiments';
    public static pageName = 'experiments';

    public render() {
        const {type} = this.props;

        return (
            <React.Fragment>
                <Header
                    type={type}
                    extra={this.renderHeaderExtra()}
                >
                    {this.renderFilters()}
                </Header>

                {this.renderContent()}
            </React.Fragment>
        );
    }

    private renderFilters = () => {
        const {type} = this.props;

        switch (type) {
            case PageType.Dashboard:
                return (
                    <DashboardFilters/>
                );

            case PageType.Mouse:
                return (
                    <DashboardFilters/>
                );

            case PageType.Experiment:
            default:
                return (
                    <ExperimentsFilters/>
                );
        }
    };

    private renderContent = () => {
        const {mode, id, experimentId, type} = this.props;

        switch (type) {
            case PageType.Dashboard:
                return (
                    <React.Fragment>
                        <Dashboard/>
                    </React.Fragment>
                );

            case PageType.Mouse:
                return (
                    <React.Fragment>
                        <Mouse/>
                    </React.Fragment>
                );

            case PageType.Experiment:
            default:
                return (
                    <React.Fragment>
                        <Experiments/>

                        { mode === Modes.Create && !experimentId && <ExperimentForm id={id} mode={mode}/> }
                        { mode === Modes.Create && experimentId && <TableMouseForm id={experimentId}/> }
                    </React.Fragment>
                );
        }
    };

    private renderHeaderExtra = (): React.ReactNode | null => {
        const {type} = this.props;

        switch (type) {
            case PageType.Dashboard:
            case PageType.Mouse:
                return null;

            case PageType.Experiment:
            default:
                return (
                    <Tooltip title="Add new experiment" placement="right">
                        <Button
                            icon="plus"
                            type="primary"
                            onClick={this.goToCreateForm}
                            size="small"
                        />
                    </Tooltip>
                );
        }
    };

    private goToCreateForm = () => {
        commonActions.router.push(`${ROOT_PATH}/create`);
    }
}
