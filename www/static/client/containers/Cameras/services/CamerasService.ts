import {notification} from 'antd';

import {bound as commonActions} from 'client/actions';
import {camerasService as camerasListService} from 'client/services/CamerasService';

import {bound as actions} from '../actions';
import {apiInstance} from '../api/CamerasAPI';
import {ROOT_PATH} from '../consts';
import {CameraCreateRequest} from '../types';

class CamerasService {
    public findCamera = async (id: string) => {
        const response = await apiInstance.find(id);
        actions.itemActions.success(response.camera);
    };

    public createCamera = async (camera: CameraCreateRequest) => {
        const request = await apiInstance.create(camera);
        if (request.camera) {
            notification.success({
                message: 'Camera was created successfully',
            });
            camerasListService.request();
            commonActions.router.push(ROOT_PATH);
        }
    };

    public updateCamera = async (id: string, camera: CameraCreateRequest) => {
        const response = await apiInstance.update(id, camera);

        if (response.message === 'ok') {
            notification.success({
                message: 'Camera was updated successfully',
            });
            camerasListService.request();
            commonActions.router.push(ROOT_PATH);
        }
    };
}

export const camerasService = new CamerasService();
