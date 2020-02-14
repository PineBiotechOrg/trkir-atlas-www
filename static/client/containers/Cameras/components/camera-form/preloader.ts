import {camerasService} from '../../services/CamerasService';
import {OwnProps} from './types';

export async function onLoad({id}: OwnProps) {
    if (id) {
        await camerasService.findCamera(id);
    }
}
