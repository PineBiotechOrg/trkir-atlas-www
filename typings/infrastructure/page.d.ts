declare module 'page' {
    import { RouteComponentProps } from 'react-router';

    export interface Preloader {
        routeProps: RouteComponentProps<any>;
    }

    export interface Page {
        preloader?: (params: Preloader) => Promise<any>;
        title?: string;
        name?: string;
    }

    export interface Preload {
        onLoad: (...args: unknown[]) => unknown;
        onDispose?: (...args: unknown[]) => unknown;
    }
}
