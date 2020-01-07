import { XYChart } from '@amcharts/amcharts4/charts';
import { Color } from '@amcharts/amcharts4/core';

import { Assign } from 'infrastructure/utils';

import { Common } from '../../types';

export interface PlotGanttPoint {
    name: string;
    fromDate: string;
    toDate: string;
    color?: Color;
}
export type PlotGanttData = PlotGanttPoint[];

export interface OwnProps {
    data: PlotGanttData;
}

export type Props = Assign<Common, OwnProps>;

export interface State {
    chart: XYChart;
}
