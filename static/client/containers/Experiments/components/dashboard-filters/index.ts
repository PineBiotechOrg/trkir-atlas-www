import {connect} from 'react-redux';

import {experimentSelector} from 'client/selectors/experiments';

import {BundleState} from '../../types';
import DashboardFilters from './DashboardFilters';
import {StateProps} from './types';


const mapStateToProps = (state: BundleState): StateProps => ({
    item: experimentSelector(state),
});

export default connect(mapStateToProps)(DashboardFilters);
