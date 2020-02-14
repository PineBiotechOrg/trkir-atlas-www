declare module 'entity/cameras' {
    export interface Camera {
        id: number;
        user: number; // ID
        name: string;
        ip: string;
        status: 'on' | 'off'; // Бекенд выпилит?
        place: string;
    }
    export type CamerasList = Camera[];

    export interface CamerasListResponse {
        message: string;
        cameras: CamerasList;
    }
}
