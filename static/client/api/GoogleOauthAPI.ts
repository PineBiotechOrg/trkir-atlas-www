import {OAuthServiceInfoResponse, OAuthCodeRequest} from 'client/types/entity/google';
import {usersApi} from 'client/utils/transport';

import {EntityAPI} from 'infrastructure/common';

export class GoogleOauthAPI implements EntityAPI {
    public sendOauthData = (data: OAuthCodeRequest) =>
        usersApi.post<OAuthCodeRequest, void>('/', data);

    public request = (): Promise<OAuthServiceInfoResponse> =>
        usersApi.get<void, OAuthServiceInfoResponse>('/service_client_id');
}

export const apiInstance = new GoogleOauthAPI();
