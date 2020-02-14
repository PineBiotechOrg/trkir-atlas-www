import {XYChart} from '@amcharts/amcharts4/charts';

import {Assign} from 'infrastructure/utils';

import {Common} from '../../types';

export interface LinePlotPoint {
    x: number;
    y: number;
    value: number;
}
export type LinePlotData = LinePlotPoint[];

export interface OwnProps {
    data: LinePlotData;
}

export type Props = Assign<Common, OwnProps>;

export interface State {
    chart: XYChart;
}
