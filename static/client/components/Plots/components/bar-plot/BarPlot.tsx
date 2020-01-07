import {
    CategoryAxis,
    ColumnSeries,
    ValueAxis,
    XYChart,
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

export default class BarPlot extends PureComponent<Props, State> {
    public readonly defaultProps: Partial<Props> = {
        styles: {},
    };
    private readonly chartUuid: string = uuid();

    public componentDidMount() {
        const {data} = this.props;
        const chart = createXYChart(this.chartUuid, XYChart);

        chart.data = data;

        const categoryAxis = chart.xAxes.push(new CategoryAxis());
        categoryAxis.dataFields.category = 'category';
        categoryAxis.renderer.grid.template.location = 0;

        chart.yAxes.push(new ValueAxis());

        const series = chart.series.push(new ColumnSeries());
        series.dataFields.valueY = 'value';
        series.dataFields.categoryX = 'category';
        series.columns.template.tooltipText = '{value}';

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
