import {
    CircleBullet,
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
    Scrollbar,
} from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import React, { PureComponent } from 'react';
import uuid from 'uuid';

import { b } from '../../Plots.scss';
import { DEFAULT_STYLES } from '../../consts';
import { Props, State } from './types';

useTheme(am4themes_animated);

export default class LineBulletPlot extends PureComponent<Props, State> {
    public readonly defaultProps: Partial<Props> = {
        styles: {},
    };
    private readonly chartUuid: string = uuid();

    public componentDidMount() {
        const {data} = this.props;
        const chart = createXYChart(this.chartUuid, XYChart);

        chart.data = data;

        const xAxis = chart.xAxes.push(new ValueAxis());
        xAxis.renderer.minGridDistance = 40;

        const yAxis = chart.yAxes.push(new ValueAxis());

        const series = chart.series.push(new LineSeries());
        series.dataFields.valueX = 'x';
        series.dataFields.valueY = 'y';
        series.dataFields.value = 'value';
        series.strokeWidth = 2;
        series.showOnInit = false;

        const bullet = series.bullets.push(new CircleBullet());
        series.heatRules.push({
            target: bullet.circle,
            min: 5,
            max: 20,
            property: 'radius',
        });

        bullet.tooltipText = '{valueX} x {valueY}: [bold]{value}[/]';

        chart.scrollbarX = new Scrollbar();
        chart.scrollbarY = new Scrollbar();

        // TODO: move to componentWillUnmount
        chart.events.on('ready', () => {
            xAxis.zoomToValues(7, 19, true);
        });

        chart.events.on('ready', () => {
            yAxis.zoomToValues(4, 14, true);
        });

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
