// IS_STABLE –> webpack.base.config.js
// eslint-disable-next-line no-var
declare var IS_STABLE: boolean;
// IS_SERVER –> package.json
// eslint-disable-next-line no-var
declare var IS_SERVER: boolean;

declare module 'core' {
    import {SelectValue} from 'antd/lib/select';

    export interface Option<T extends SelectValue> {
        value: T;
        title: string;
    }
    export type Options<T extends SelectValue> = Option<T>[];
}
