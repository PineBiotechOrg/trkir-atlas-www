import {
    DateAxis,
    LineSeries,
    ValueAxis,
    XYChart,
    XYChartScrollbar,
    XYCursor,
} from '@amcharts/amcharts4/charts';
import {
    create as createXYChart,
    useTheme,
} from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import React, { PureComponent } from 'react';
import uuid from 'uuid';

import { b } from '../../Plots.scss';
import { DEFAULT_STYLES } from '../../consts';
import { Props, State } from './types';

useTheme(am4themes_animated);

export default class SimplePlot extends PureComponent<Props, State> {
    public readonly defaultProps: Partial<Props> = {
        styles: {},
    };
    private readonly chartUuid: string = uuid();

    public componentDidMount() {
        const {data} = this.props;
        const chart = createXYChart(this.chartUuid, XYChart);

        chart.paddingRight = 20;
        chart.data = data;

        const dateAxis = chart.xAxes.push(new DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        const valueAxis = chart.yAxes.push(new ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;

        const series = chart.series.push(new LineSeries());
        series.dataFields.dateX = 'x';
        series.dataFields.valueY = 'y';

        series.tooltipText = '{valueY.value}';
        chart.cursor = new XYCursor();

        const scrollbarX = new XYChartScrollbar();
        scrollbarX.series.push(series);
        chart.scrollbarX = scrollbarX;

        this.setState({chart});
    }

    public componentWillUnmount() {
        const {chart} = this.state;
        if (chart) {
            chart.dispose();
        }
    }

    public render() {
        const {styles} = this.props;

        return (
            <div
                id={ this.chartUuid }
                style={ {
                    ...DEFAULT_STYLES,
                    ...styles,
                } }
                className={ b() }
            />
        );
    }
}
