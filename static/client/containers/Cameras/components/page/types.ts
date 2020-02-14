import {Modes} from 'client/types/infrastructure/form';

import {RouteProps} from '../../types';

export type OwnProps = {
    mode: Modes;
} & RouteProps;

export interface StateProps {
    cameraId: string;
}

export type Props = StateProps & OwnProps;
