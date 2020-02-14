import {camerasApi} from 'client/utils/transport';

import {EntityAPI} from 'infrastructure/common';

import {CameraCreateRequest, CameraItemResponse} from '../types';

class CamerasAPI implements EntityAPI {
    public find = (id: string) =>
        camerasApi.get<void, CameraItemResponse>(`/camera/${id}`);

    public create = (camera: CameraCreateRequest) =>
        camerasApi.post<CameraCreateRequest, { camera?: number }>('/', camera);

    public update = (id: string, camera: CameraCreateRequest) =>
        camerasApi.patch<CameraCreateRequest, { message: string }>(`/camera/${id}`, camera);
}

export const apiInstance = new CamerasAPI();
