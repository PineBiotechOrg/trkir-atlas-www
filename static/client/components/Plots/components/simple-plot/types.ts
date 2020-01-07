import { XYChart } from '@amcharts/amcharts4/charts';

import { Assign } from 'infrastructure/utils';

import { Common } from '../../types';

export type PlotPointAxeValue =
    | string
    | number
    | Date;

export interface PlotXYPoint {
    x: PlotPointAxeValue;
    y: PlotPointAxeValue;
    name?: string;
}
export type PlotXYData = PlotXYPoint[];

export interface OwnProps {
    data: PlotXYData;
}

export type Props = Assign<Common, OwnProps>;

export interface State {
    chart: XYChart;
}
