import {RouteComponentProps} from 'react-router';

import {ExtendedState} from 'client/utils/infrastructure/store';

import {Camera} from 'entity/cameras';

import {CamerasReducers} from './reducers';

export type BundleState = ExtendedState<{
    cameras: CamerasReducers;
}>;

export interface RouterProps {
    id?: string;
}

export type RouteProps = RouteComponentProps<RouterProps>;

export interface CameraCreateRequest {
    name: string;
    place: string;
    ip: string;
}

export interface CameraItemResponse {
    message: string;
    camera: Camera;
}
