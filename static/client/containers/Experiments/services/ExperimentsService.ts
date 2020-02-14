import {notification} from 'antd';

import {bound as commonActions} from 'client/actions';

import {apiInstance} from '../api/ExperimentsAPI';
import {Model} from '../components/experiment-form/types';
import {Model as AddMouseModel} from '../components/table-mouse-form/types';
import {ROOT_PATH} from '../consts';
import {preCreateExperiments} from '../utils/matchers';

class ExperimentsService {
    public createOrUpdate = async (model: Model, id?: string) => {
        commonActions.ui.startLoading();

        try {
            const requestData = preCreateExperiments(model);
            const response = id
                ? await apiInstance.update(id, requestData)
                : await apiInstance.create(requestData);

            if (response) {
                notification.success({
                    message: `Experiment was ${id ? 'updated' : 'created'} successfully`,
                });
            }

        } finally {
            commonActions.ui.stopLoading();
        }

        commonActions.router.push(ROOT_PATH);
    };

    public addMouseToExperiment = async (id: string, mouse: AddMouseModel) => {
        commonActions.ui.startLoading();

        try {
            const response = await apiInstance.addMouse(id, mouse);

            if (response) {
                notification.success({
                    message: `Mouse was added to experiment ${id} successfully`,
                });
            }

        } finally {
            commonActions.ui.stopLoading();
        }

        commonActions.router.push(ROOT_PATH);
    };
}

export const experimentsService = new ExperimentsService();
