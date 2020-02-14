import {Experiment} from 'entity/experiments';
import {Mice} from 'entity/mice';

export interface OwnProps {
    id: string;
}

export interface StateProps {
    item: Experiment;
    mice: Mice;
}

export type Props = OwnProps & StateProps;
