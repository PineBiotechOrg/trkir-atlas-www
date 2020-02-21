import {Divider} from 'antd';
import React from 'react';

import Features from 'client/components/Features';
import {
    BarPlot,
    BoxPlot,
    LineBulletPlot,
    GanttPlot,
} from 'client/components/Plots';
import VideoStream from 'client/components/VideoStream';

import {
    BOX_PLOT_DATA,
    LINE_PLOT_DATA,
    BAR_PLOT_DATA,
    getGanttPlotData,
} from './consts.mock';
import {Props} from './types';

import {b} from './Mouse.scss';

const mockGanttPlotData = getGanttPlotData();

export default class Mouse extends React.PureComponent<Props> {
    public render() {
        const {mouseId} = this.props;

        return (
            <React.Fragment>
                <VideoStream
                    source={`/mice/mouse/${mouseId}/fragment/`}
                    className={b('stream')}
                />

                <Divider/>

                <Features url="/analysis/mouse/7/features/"/>
                <BarPlot data={BAR_PLOT_DATA}/>
                <BoxPlot data={BOX_PLOT_DATA}/>
                <LineBulletPlot data={LINE_PLOT_DATA}/>
                <GanttPlot data={mockGanttPlotData}/>
            </React.Fragment>
        );
    }
}
