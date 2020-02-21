import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {compose} from 'redux';

import {experimentSelector} from 'client/selectors/experiments';
import preload from 'client/utils/hocs/preload';

import {getExperimentsId, getMouseId} from '../../selectors/router';
import {BundleState} from '../../types';
import Header from './Header';
import {onLoad} from './preloader';
import {OwnProps, StateProps} from './types';

const mapStateToProps = (state: BundleState, ownProps: OwnProps): StateProps => ({
    experiment: experimentSelector(state),
    id: getExperimentsId(ownProps),
    mouseId: getMouseId(ownProps),
});

export default compose<any>(
    withRouter,
    connect(mapStateToProps),
    preload({
        onLoad,
    }),
)(Header);
