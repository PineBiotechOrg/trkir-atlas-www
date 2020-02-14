import queryString from 'query-string';

import {googleOauthCodeService} from 'client/services/GoogleOauthCodeService';

import {GOOGLE_OAUTH_PATH} from '../../consts';

export async function onLoad() {
    const code = queryString.parse(window.location.search)?.code as string;
    await googleOauthCodeService.handleSendData({
        redirect_url: `${window.location.origin}${GOOGLE_OAUTH_PATH}`,
        code,
    });
}
