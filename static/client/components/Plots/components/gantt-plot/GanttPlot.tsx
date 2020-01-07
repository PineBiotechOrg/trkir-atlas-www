import {
    CategoryAxis,
    ColumnSeries,
    DateAxis,
    XYChart,
} from '@amcharts/amcharts4/charts';
import {
    create as createXYChart,
    percent,
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

export default class GanttPlot extends PureComponent<Props, State> {
    public readonly defaultProps: Partial<Props> = {
        styles: {},
    };
    private readonly chartUuid: string = uuid();

    public componentDidMount() {
        const {data} = this.props;
        const chart = createXYChart(this.chartUuid, XYChart);
        chart.hiddenState.properties.opacity = 0;
        chart.paddingRight = 30;
        chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd HH:mm';

        chart.data = data;

        const categoryAxis = chart.yAxes.push(new CategoryAxis());
        categoryAxis.dataFields.category = 'name';
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.inversed = true;

        const dateAxis = chart.xAxes.push(new DateAxis());
        dateAxis.dateFormatter.dateFormat = 'yyyy-MM-dd HH:mm';
        dateAxis.renderer.minGridDistance = 70;
        dateAxis.baseInterval = { count: 30, timeUnit: 'minute' };
        dateAxis.max = new Date(2018, 0, 1, 24, 0, 0, 0).getTime();
        dateAxis.strictMinMax = true;
        dateAxis.renderer.tooltipLocation = 0;

        const series = chart.series.push(new ColumnSeries());
        series.columns.template.width = percent(80);
        series.columns.template.tooltipText = '{name}: {openDateX} - {dateX}';

        series.dataFields.openDateX = 'fromDate';
        series.dataFields.dateX = 'toDate';
        series.dataFields.categoryY = 'name';
        series.columns.template.propertyFields.fill = 'color'; // get color from data
        series.columns.template.propertyFields.stroke = 'color';
        series.columns.template.strokeOpacity = 1;

        chart.scrollbarX = new Scrollbar();

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
