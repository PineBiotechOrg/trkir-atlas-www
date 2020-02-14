import {BaseStream} from '../../utils/hocs/stream';

export interface OwnProps extends BaseStream {
    className?: string;
}

export interface State {
    // TODO: Выпилить с изменением ручки /image
    random: number;
}

export type Props = OwnProps;
