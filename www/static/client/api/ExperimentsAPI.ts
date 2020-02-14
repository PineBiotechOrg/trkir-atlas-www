import {ExperimentStatus} from 'client/types/entity/experiments';
import {pybackendExperimentsApi} from 'client/utils/transport';

import {EntityAPI} from 'infrastructure/common';

import {Experiments, Experiment, ExperimentResponse, ExperimentsResponse} from 'entity/experiments';

class ExperimentsApi implements EntityAPI {
    public request = (): Promise<Experiments> =>
        pybackendExperimentsApi.get<void, ExperimentsResponse>('/')
            .then(response => response.experiments);

    public find = (id: string): Promise<Experiment> =>
        pybackendExperimentsApi.get<void, ExperimentResponse>(`/experiment/${id}/`)
            .then(response => response.experiment);

    public changeStatus = (id: string, status: ExperimentStatus): Promise<unknown> =>
        pybackendExperimentsApi.post<{ status: ExperimentStatus }, unknown>(
            `/experiment/${id}/change_experiment_status`, {status},
        );
}

export const apiInstance = new ExperimentsApi();
