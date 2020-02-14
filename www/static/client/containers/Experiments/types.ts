import {RouteComponentProps} from 'react-router';

import {ExtendedState} from 'client/utils/infrastructure/store';

import {ExperimentsReducers} from './reducers';

export type BundleState = ExtendedState<{
    experiments: ExperimentsReducers;
}>;

export interface ExperimentRequest {
    title: string;
    description: string;
    place: string;
}

export interface AddMouseResponse {
    mouse: number;
    message: string;
}

export interface RouterProps {
    id?: string;
    experimentId?: string;
}

export type RouteProps = RouteComponentProps<RouterProps>;

export const enum PageType {
    Experiment = 'experiment',
    Dashboard = 'dashboard',
}
