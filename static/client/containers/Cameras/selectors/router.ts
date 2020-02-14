import {RouteProps} from '../types';

export const getCameraId = (ownProps: RouteProps) =>
    ownProps.match.params?.id;
