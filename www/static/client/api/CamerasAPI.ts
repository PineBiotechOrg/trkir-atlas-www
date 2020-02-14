import {camerasApi} from 'client/utils/transport';

import {EntityAPI} from 'infrastructure/common';

import {CamerasListResponse} from 'entity/cameras';

class CamerasAPI implements EntityAPI {
    public request = () =>
        camerasApi.get<void, CamerasListResponse>('/');
}

export const apiInstance = new CamerasAPI();
