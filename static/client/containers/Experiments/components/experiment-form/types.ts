import {FormComponentProps} from 'antd/lib/form';

import {Modes} from 'client/types/infrastructure/form';

export interface Model {
    title: string;
    description: string;
    place: string;
}

export type OwnProps = {
    id: string;
    mode: Modes;
} & FormComponentProps<Model>;

export type Props = OwnProps;
