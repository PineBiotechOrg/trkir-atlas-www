declare module 'infrastructure/common' {
    import {Location} from 'history';
    import {RouteComponentProps} from 'react-router';
    import {Action as ReduxAction} from 'redux';

    import {Assign, Indexed, Iterable} from 'infrastructure/utils';

    export interface RouterLocation extends Location {
        query?: Indexed;
    }

    export interface EntityAPI {
        request?: (...args: any[]) => Promise<any>;
        create?: (...args: any[]) => Promise<any>;
        update?: (...args: any[]) => Promise<any>;
        delete?: (...args: any[]) => Promise<any>;
        find?: (...args: any[]) => Promise<any>;
    }

    export type RouteProps<T> = Assign<RouteComponentProps<T>, {
        location: RouterLocation;
    }>;

    export type Action<P, T = any> = ReduxAction<T> & {
        payload?: P;
    };

    export interface Option {
        id: string | number;
        label: string | number;
    }

    export type Options = Option[];
}
