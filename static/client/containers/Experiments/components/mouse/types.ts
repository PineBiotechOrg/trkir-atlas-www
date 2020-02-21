import {RouteProps} from '../../types';

export interface StateProps {
    mouseId: string | undefined;
}

export type OwnProps = RouteProps;

export type Props = OwnProps & StateProps;
