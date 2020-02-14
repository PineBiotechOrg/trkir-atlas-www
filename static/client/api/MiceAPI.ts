import {miceApi} from 'client/utils/transport';

import {EntityAPI} from 'infrastructure/common';

import {MiceResponse} from 'entity/mice';

class MiceAPI implements EntityAPI {
    public request = () =>
        miceApi.get<void, MiceResponse>('/');
}

export const apiInstance = new MiceAPI();
