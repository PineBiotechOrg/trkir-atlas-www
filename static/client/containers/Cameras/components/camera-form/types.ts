import {FormComponentProps} from 'antd/lib/form';

import {Camera} from 'entity/cameras';

import {CameraCreateRequest} from '../../types';

export type Model = CameraCreateRequest;

export type OwnProps = {
    id: string;
} & FormComponentProps<Model>;

export interface StateProps {
    item: Camera;
}

export type Props = OwnProps & StateProps;
