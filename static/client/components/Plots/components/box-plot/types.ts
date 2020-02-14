import {XYChart} from '@amcharts/amcharts4/charts';

import {Assign} from 'infrastructure/utils';

import {Common} from '../../types';

export interface BoxPlotPoint {
    date: string;
    open: string;
    high: string;
    low: string;
    close: string;
}

export type BoxPlotData = BoxPlotPoint[];

export interface OwnProps {
    data: BoxPlotData;
}

export type Props = Assign<Common, OwnProps>;

export interface State {
    chart: XYChart;
}
