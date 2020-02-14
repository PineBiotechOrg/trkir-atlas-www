import React from 'react';

import {Modes} from 'client/types/infrastructure/form';

import {PageType} from '../../types';
import Dashboard from '../dashboard';
import ExperimentForm from '../experiment-form';
import Experiments from '../experiments';
import TableMouseForm from '../table-mouse-form';
import {Props} from './types';

export default class Page extends React.PureComponent<Props> {
    public static pageTitle = 'Experiments';
    public static pageName = 'experiments';

    public render() {
        return (
            <React.Fragment>
                {this.renderContent()}
            </React.Fragment>
        );
    }

    private renderContent = () => {
        const {mode, id, experimentId, type} = this.props;

        switch (type) {
            case PageType.Dashboard:
                return (
                    <React.Fragment>
                        <Dashboard/>
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
                )
        }
    };
}
