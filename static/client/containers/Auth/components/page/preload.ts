import {bound as commonActions} from 'client/actions';
import {googleOauthCodeService} from 'client/services/GoogleOauthCodeService';

import {StatusState} from '../../types';
import {Props} from './types';

export async function onLoad({status}: Props) {
    await googleOauthCodeService.handleSetClientId();

    if (StatusState.Failed !== status) {
        commonActions.router.push('/experiments');
    }
}
