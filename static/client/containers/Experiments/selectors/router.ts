import {RouteProps} from '../types';

export const getExperimentsId = (ownProps: RouteProps) =>
    ownProps.match.params?.id;

export const getExperimentId = (ownProps: RouteProps) =>
    ownProps.match.params?.experimentId;
