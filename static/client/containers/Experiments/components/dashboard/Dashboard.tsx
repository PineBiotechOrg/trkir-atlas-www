import React from 'react';

import VideoStream from 'client/components/VideoStream/';

import DashboardHeader from '../dashboard-header';

export default class Dashboard extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <DashboardHeader/>
                <VideoStream source="/api/v1/mice/mouse/2/image/"/>
            </React.Fragment>
        );
    }
}
