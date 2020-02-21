import {experimentsService} from 'client/services/ExperimentsService';
import {miceService} from 'client/services/MiceService';

export async function onLoad() {
    await Promise.all([
        experimentsService.request(),
        miceService.request(),
    ]);
}
