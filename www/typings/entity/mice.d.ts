declare module 'entity/mice' {
    export interface Mouse {
        id: number;
        camera: number;
        experiment: number;
        user: number; // ID
        name: string;
        description: string;
        virus: string;
        date_virus: string;
        date_start: string;
        date_end: string;
        status: string;
    }
    export type Mice = Mouse[];

    export interface MiceResponse {
        message: string;
        mice: Mice;
    }
}
