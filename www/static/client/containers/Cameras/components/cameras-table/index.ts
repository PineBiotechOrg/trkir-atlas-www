import {connect} from 'react-redux';
import {compose} from 'redux';

import {camerasSelector} from 'client/selectors/cameras';
import preload from 'client/utils/hocs/preload';

import {BundleState} from '../../types';
import CamerasTable from './CamerasTable';
import {onLoad} from './preloader';
import {StateProps} from './types';

const mapStateToProps = (state: BundleState): StateProps => ({
    cameras: camerasSelector(state),
});

export default compose(
    preload({
        onLoad,
    }),
)(connect(mapStateToProps)(CamerasTable));
