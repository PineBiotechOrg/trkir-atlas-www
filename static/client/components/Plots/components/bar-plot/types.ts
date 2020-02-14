import {XYChart} from '@amcharts/amcharts4/charts';

import {Assign} from 'infrastructure/utils';

import {Common} from '../../types';

export interface BarPlotPoint {
    category: string;
    value: number;
}
export type BarPlotData = BarPlotPoint[];

export interface OwnProps {
    data: BarPlotData;
}

export type Props = Assign<Common, OwnProps>;

export interface State {
    chart: XYChart;
}
