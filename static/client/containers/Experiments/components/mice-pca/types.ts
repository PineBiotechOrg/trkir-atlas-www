import {Mice} from 'entity/mice';

export interface OwnProps {
    id: string;
}

export interface StateProps {
    mice: Mice;
}

export type Props = OwnProps & StateProps;
