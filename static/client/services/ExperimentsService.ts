import {bound as commonActions} from 'client/actions';
import {ExperimentStatus} from 'client/types/entity/experiments';

import {apiInstance} from '../api/ExperimentsAPI';

class ExperimentsService {
    public request = async () => {
        commonActions.ui.startLoading();

        try {
            const experiments = await apiInstance.request();
            commonActions.commonExperiments.listActions.success(experiments || []);
        } finally {
            commonActions.ui.stopLoading();
        }
    };

    public find = async (id: string) => {
        commonActions.ui.startLoading();

        try {
            const experiment = await apiInstance.find(id);
            commonActions.commonExperiments.itemActions.success(experiment);
        } finally {
            commonActions.ui.stopLoading();
        }
    };

    public changeStatus = async (id: string, status: ExperimentStatus) => {
        commonActions.ui.startLoading();

        try {
            const experiment = await apiInstance.changeStatus(id, status);
            commonActions.commonExperiments.itemActions.success(experiment);
        } finally {
            commonActions.ui.stopLoading();
        }
    };
}

export const experimentsService = new ExperimentsService();
