import {experimentsService} from 'client/services/ExperimentsService';

import {OwnProps} from './types';

export async function onLoad({id}: OwnProps) {
    await experimentsService.find(id);
}
