import {experimentsService} from 'client/services/ExperimentsService';

import {OwnProps} from './types';

export async function onLoad({match: {params: {id}}}: OwnProps) {
    await experimentsService.find(id);
}
