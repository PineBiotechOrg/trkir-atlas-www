import {Experiment} from 'entity/experiments';

export interface OwnProps {
    id: string;
}

export interface StateProps {
    item: Experiment;
}

export type Props = OwnProps & StateProps;
