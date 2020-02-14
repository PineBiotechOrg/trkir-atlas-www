import {authCodeService} from 'client/services/AuthCodeService';
import {StatusState} from 'client/types/entity/auth';
import {getStore} from 'client/utils/infrastructure/store';

export async function onLoad() {
    if (getStore().auth.status === StatusState.Success) {
        return;
    }
    await authCodeService.handleGetUserData();
}
