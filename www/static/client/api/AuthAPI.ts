import {GetUserInfoResponse} from 'client/types/entity/auth';
import {usersApi} from 'client/utils/transport';

import {EntityAPI} from 'infrastructure/common';

class AuthAPI implements EntityAPI {
    public request = (): Promise<GetUserInfoResponse> => {
        return usersApi.get('/user/');
    };

    public logout = () =>
        usersApi.post('/user/logout/');
}

export const apiInstance = new AuthAPI();
