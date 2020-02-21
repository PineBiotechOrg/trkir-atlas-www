declare module 'infrastructure/plots' {
    export interface Feature {
        date: string;
        x_center: number;
        y_center: number;
        x_head: number;
        y_head: number;
        area: number;
        size: number;
        speed: number;
        rotation: number;
        temperature: number;
        temperature_speed: number;
    }
    export type Features = Feature[];
}
