import {Modes} from 'client/types/infrastructure/form';

import {RouteProps, PageType} from '../../types';

export type OwnProps = {
    mode: Modes;
    type: PageType;
} & RouteProps;

export interface StateProps {
    id?: string;
    experimentId?: string;
}

export type Props = StateProps & OwnProps;
