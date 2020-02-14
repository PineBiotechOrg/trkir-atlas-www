import {
    CandlestickSeries,
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
import React, {Component} from 'react';
import uuid from 'uuid';

import {DATE_FORMAT, DEFAULT_STYLES} from '../../consts';
import {b} from '../../Plots.scss';
import {Props, State} from './types';

useTheme(am4themes_animated);

export default class BoxPlot extends Component<Props, State> {
    private readonly chartUuid: string = uuid();

    public componentDidMount() {
        const {data} = this.props;
        const chart = createXYChart(this.chartUuid, XYChart);

        chart.paddingRight = 20;
        chart.dateFormatter.inputDateFormat = DATE_FORMAT;

        const dateAxis = chart.xAxes.push(new DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        const valueAxis = chart.yAxes.push(new ValueAxis());
        valueAxis.tooltip.disabled = true;

        const series = chart.series.push(new CandlestickSeries());
        series.dataFields.dateX = 'date';
        series.dataFields.valueY = 'close';
        series.dataFields.openValueY = 'open';
        series.dataFields.lowValueY = 'low';
        series.dataFields.highValueY = 'high';
        series.simplifiedProcessing = true;
        series.tooltipText = 'Open:${openValueY.value}\nLow:${lowValueY.value}\nHigh:${highValueY.value}\nClose:${valueY.value}';

        // important!
        // candlestick series colors are set in states.
        // series.riseFromOpenState.properties.fill = am4core.color("#00ff00");
        // series.dropFromOpenState.properties.fill = am4core.color("#FF0000");
        // series.riseFromOpenState.properties.stroke = am4core.color("#00ff00");
        // series.dropFromOpenState.properties.stroke = am4core.color("#FF0000");

        series.riseFromPreviousState.properties.fillOpacity = 1;
        series.dropFromPreviousState.properties.fillOpacity = 0;

        chart.cursor = new XYCursor();

        // a separate series for scrollbar
        const lineSeries = chart.series.push(new LineSeries());
        lineSeries.dataFields.dateX = 'date';
        lineSeries.dataFields.valueY = 'close';
        // need to set on default state, as initially series is "show"
        lineSeries.defaultState.properties.visible = false;

        // hide from legend too (in case there is one)
        lineSeries.hiddenInLegend = true;
        lineSeries.fillOpacity = 0.5;
        lineSeries.strokeOpacity = 0.5;

        const scrollbarX = new XYChartScrollbar();
        scrollbarX.series.push(lineSeries);
        chart.scrollbarX = scrollbarX;

        chart.data = data;
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
                id={this.chartUuid}
                style={{
                    ...DEFAULT_STYLES,
                    ...styles,
                }}
                className={b()}
            />
        );
    }
}
