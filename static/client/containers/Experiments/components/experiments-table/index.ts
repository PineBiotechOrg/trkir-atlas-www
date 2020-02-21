import {connect} from 'react-redux';
import {compose} from 'redux';

import preload from 'client/utils/hocs/preload';

import {filteredExperimentsSelector} from '../../selectors/experiments';
import {BundleState} from '../../types';
import ExperimentsTable from './ExperimentsTable';
import {onLoad} from './preloader';
import {StateProps} from './types';

const mapStateToProps = (state: BundleState): StateProps => ({
    items: filteredExperimentsSelector(state),
});

export default compose(
    preload({
        onLoad,
    }),
)(connect(mapStateToProps)(ExperimentsTable));
