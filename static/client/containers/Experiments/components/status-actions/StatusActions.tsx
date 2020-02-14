import {Button} from 'antd';
import React from 'react';

import {experimentsService} from 'client/services/ExperimentsService';
import {ExperimentStatus} from 'client/types/entity/experiments';

import {Props} from './types';

export default class StatusActions extends React.PureComponent<Props> {
    public render() {
        return (
            <Button.Group>
                <Button
                    icon="play-circle"
                    onClick={this.changeStatus(ExperimentStatus.Start)}
                    size="large"
                >
                    Start
                </Button>
                <Button
                    onClick={this.changeStatus(ExperimentStatus.Pause)}
                    size="large"
                    type="danger"
                >
                    Pause
                </Button>
            </Button.Group>
        );
    }

    private changeStatus = (status: ExperimentStatus) => () => {
        const {id} = this.props;
        experimentsService.changeStatus(id, status);
    };
}
