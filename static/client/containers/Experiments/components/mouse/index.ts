import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {compose} from 'redux';

import {getMouseId} from '../../selectors/router';
import {BundleState} from '../../types';
import Mouse from './Mouse';
import {OwnProps, StateProps} from './types';

const mapStateToProps = (state: BundleState, ownProps: OwnProps): StateProps => ({
    mouseId: getMouseId(ownProps),
});

export default compose<any>(
    withRouter,
    connect(mapStateToProps),
)(Mouse);
