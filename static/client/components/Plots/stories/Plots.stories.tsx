import { storiesOf } from '@storybook/react';
import React from 'react';

import {
    BarPlot,
    BoxPlot,
    GanttPlot,
    LineBulletPlot,
    Plotly,
    SimplePlot,
} from '../index';
import {
    getGanttPlotData,
    getSimplePlotData,
    BAR_PLOT_DATA,
    BOX_PLOT_DATA,
    LINE_PLOT_DATA,
    SCATTER_PLOT_DATA,
} from './consts';

storiesOf('Plots', module)
    .add('Simple XY Plot', () => (
        <SimplePlot data={ getSimplePlotData() }/>
    ))
    .add('Box Plot', () => (
        <BoxPlot data={ BOX_PLOT_DATA }/>
    ))
    .add('Gantt Plot', () => (
        <GanttPlot data={ getGanttPlotData() }/>
    ))
    .add('Line bullet Plot', () => (
        <LineBulletPlot data={ LINE_PLOT_DATA }/>
    ))
    .add('Plotly Scatter Plot', () => (
        <Plotly
            data={ SCATTER_PLOT_DATA }
            layout={ null }
        />
    ))
    .add('Bar Plot', () => (
        <BarPlot data={ BAR_PLOT_DATA }/>
    ));
