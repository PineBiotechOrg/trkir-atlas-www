import {Form} from 'antd';
import {connect} from 'react-redux';
import {compose} from 'redux';

import preload from 'client/utils/hocs/preload';

import {cameraSelector} from '../../selectors/cameras';
import {BundleState} from '../../types';
import CameraForm from './CameraForm';
import {onLoad} from './preloader';
import {OwnProps, StateProps} from './types';

const mapStateToProps = (state: BundleState): StateProps =>({
    item: cameraSelector(state),
});

export default compose<any>(
    Form.create<OwnProps>(),
    preload({
        onLoad,
    }),
    connect(mapStateToProps),
)(CameraForm);
