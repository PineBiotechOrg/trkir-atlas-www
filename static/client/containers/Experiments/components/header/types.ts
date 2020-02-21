import React from 'react';

import {Experiment} from 'entity/experiments';

import {RouteProps, PageType} from '../../types';

export interface StateProps {
    experiment: Experiment;
    id: string | undefined;
    mouseId: string | undefined;
}

export type OwnProps = {
    type: PageType;
    extra?: React.ReactNode;
} & RouteProps;

export type Props = OwnProps & StateProps;
