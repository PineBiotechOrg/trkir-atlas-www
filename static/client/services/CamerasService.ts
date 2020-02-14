import {bound as commonActions} from 'client/actions';

import {apiInstance} from '../api/CamerasAPI';

class CamerasService {
    public request = async () => {
        const response = await apiInstance.request();
        commonActions.camerasList.success(response.cameras);
    };
}

export const camerasService = new CamerasService();
