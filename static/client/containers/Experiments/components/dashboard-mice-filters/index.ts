import {connect} from 'react-redux';
import {compose} from 'redux';

import preload from 'client/utils/hocs/preload';

import {lengthOfFilteredMiceSelector} from '../../selectors/experiments';
import {BundleState} from '../../types';
import DashboardMiceFilters from './DashboardMiceFilters';
import {onLoad} from './preloader';
import {StateProps} from './types';

const mapStateToProps = (state: BundleState): StateProps => ({
    lengthMice: lengthOfFilteredMiceSelector(state),
});

export default compose<any>(
    preload({
        onLoad,
    }),
    connect(mapStateToProps),
)(DashboardMiceFilters);
