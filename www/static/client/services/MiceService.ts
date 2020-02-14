import {bound as commonActions} from 'client/actions';

import {apiInstance} from '../api/MiceAPI';

class MiceService {
    public request = async () => {
        const response = await apiInstance.request();
        commonActions.mice.success(response.mice);
    };
}

export const miceService = new MiceService();
