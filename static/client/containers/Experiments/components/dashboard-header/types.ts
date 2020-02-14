import {Experiment} from 'entity/experiments';

import {RouteProps} from '../../types';

export interface StateProps {
    item: Experiment;
}

export type OwnProps = RouteProps;

export type Props = StateProps & RouteProps;
