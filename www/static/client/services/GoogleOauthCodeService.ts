import {apiInstance} from 'client/api/GoogleOauthAPI';
import {OAuthCodeRequest} from 'client/types/entity/google';

import {bound as googleOAuthActions} from '../actions';

export class GoogleOauthCodeService {
    public handleSendData = async (data: OAuthCodeRequest) => {
        await apiInstance.sendOauthData(data);
        window.location.href = `${window.location.origin}/experiments`;
    };

    public handleSetClientId = async () => {
        const response = await apiInstance.request();
        googleOAuthActions.googleOauth.setClientId(response.client_id);
    };
}

export const googleOauthCodeService = new GoogleOauthCodeService();
