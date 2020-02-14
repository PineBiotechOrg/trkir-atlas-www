import {pybackendExperimentsApi} from 'client/utils/transport';

import {EntityAPI} from 'infrastructure/common';

import {Model as AddMouseModel} from '../components/table-mouse-form/types';
import {ExperimentRequest, AddMouseResponse} from '../types';

class ExperimentsApi implements EntityAPI {
    public create = (data: ExperimentRequest): Promise<number> =>
        pybackendExperimentsApi.post<ExperimentRequest, { experiment: number }>('/', data)
            .then(response => response.experiment);

    public update = (id: string, data: ExperimentRequest): Promise<string> =>
        pybackendExperimentsApi.patch<ExperimentRequest, { message: string }>(`/experiment/${id}`, data)
            .then(response => response.message);

    public addMouse = (experimentId: string, mouse: AddMouseModel): Promise<number> =>
        pybackendExperimentsApi.put<AddMouseModel, AddMouseResponse>(
            `/experiment/${experimentId}`, mouse,
        )
            .then(response => response.mouse);
}

export const apiInstance = new ExperimentsApi();
