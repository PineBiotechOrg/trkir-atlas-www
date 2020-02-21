import {experimentsService} from 'client/services/ExperimentsService';

import {OwnProps} from './types';

export async function onLoad({id}: OwnProps) {
    if (id) {
        await experimentsService.find(id);
    }
}
