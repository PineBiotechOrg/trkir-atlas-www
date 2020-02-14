import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {compose} from 'redux';

import {experimentSelector} from 'client/selectors/experiments';
import preload from 'client/utils/hocs/preload';

import {BundleState} from '../../types';
import DashboardHeader from './DashboardHeader';
import {onLoad} from './preloader';
import {StateProps} from './types';

const mapStateToProps = (state: BundleState): StateProps => ({
    item: experimentSelector(state),
});

export default compose<any>(
    withRouter,
    preload({
        onLoad,
    }),
    connect(mapStateToProps),
)(DashboardHeader);
