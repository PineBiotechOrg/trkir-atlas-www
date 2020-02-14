import {FormComponentProps} from 'antd/lib/form';

import {CamerasList} from 'entity/cameras';

export interface Model {
    name: string;
    camera: string;
}

export type OwnProps = {
    id: string;
} & FormComponentProps<Model>;

export interface StateProps {
    cameras: CamerasList;
}

export type Props = OwnProps & StateProps;
