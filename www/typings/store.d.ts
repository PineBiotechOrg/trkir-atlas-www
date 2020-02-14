declare module 'core-store' {
    export interface StoreOptions {
        isLogger?: boolean;
        router?: {
            initialEntries: string[];
        };
    }
}
