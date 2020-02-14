import React from 'react';

import {FORM_VISIBLE_MODES} from '../../consts';
import CameraForm from '../camera-form';
import CamerasHeader from '../cameras-header';
import CamerasTable from '../cameras-table';
import {Props} from './types';

export default class Page extends React.PureComponent<Props> {
    public static pageTitle = 'Cameras';
    public static pageName = 'cameras';

    public render() {
        const {mode, cameraId} = this.props;

        return (
            <React.Fragment>
                <CamerasHeader/>
                <CamerasTable/>
                {FORM_VISIBLE_MODES.includes(mode) && <CameraForm id={cameraId}/>}
            </React.Fragment>
        );
    }
}
