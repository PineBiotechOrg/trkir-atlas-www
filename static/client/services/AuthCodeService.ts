import {notification} from 'antd';

import {bound as commonActions} from 'client/actions';
import {apiInstance} from 'client/api/AuthAPI';
import {getClientID, getStatus} from 'client/selectors/auth';
import {GetUserInfoResponse, StatusState} from 'client/types/entity/auth';
import {Status} from 'client/types/infrastructure/common';
import {getStore} from 'client/utils/infrastructure/store';
import {makeGoogleOauthHost} from 'client/utils/oauth/pathsUtils';

const AUTH_PATH = '/auth';
const GOOGLE_OAUTH_PATH = '/google_oauth/';

class AuthCodeService {
    public handleGetUserData = () => {
        return apiInstance.request()
            .then(this.checkUser);
    };

    public logout = async () => {
        await apiInstance.logout();
        commonActions.auth.logout();
    };

    public checkUser = (userData: GetUserInfoResponse) => {
        const path = window.location.pathname;
        const status: Status = getStatus(getStore());

        if (!userData.user) {
            commonActions.auth.setStatus(StatusState.Failed);
            if (path !== GOOGLE_OAUTH_PATH) {
                commonActions.router.push(AUTH_PATH);
                notification.error({message: 'Please login, to view this page'});
            }
        }

        if (userData.user || status === StatusState.Success) {
            commonActions.auth.setUser(userData.user);
            commonActions.auth.setStatus(StatusState.Success);
            notification.success({message: `Hello, ${userData.user?.login}`});
        }
    };

    public handleSendGoogleData = () => {
        const clientId: string = getClientID(getStore());
        window.location.href = makeGoogleOauthHost(window.location.origin, clientId);
    };
}

export const authCodeService = new AuthCodeService();
