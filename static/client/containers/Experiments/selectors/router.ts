import {RouteProps} from '../types';

export const getExperimentsId = (ownProps: RouteProps) =>
    ownProps.match.params?.id;

export const getExperimentId = (ownProps: RouteProps) =>
    ownProps.match.params?.experimentId;

export const getMouseId = (ownProps: RouteProps) =>
    ownProps.match.params?.mouseId;
