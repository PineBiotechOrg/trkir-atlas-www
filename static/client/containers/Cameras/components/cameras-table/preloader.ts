import {camerasService as camerasListService} from 'client/services/CamerasService';

export async function onLoad() {
    await camerasListService.request();
}
