import {connect} from 'react-redux';
import {compose} from 'redux';

import {experimentsSelector} from 'client/selectors/experiments';
import preload from 'client/utils/hocs/preload';

import {BundleState} from '../../types';
import ExperimentsTable from './ExperimentsTable';
import {onLoad} from './preloader';
import {StateProps} from './types';

const mapStateToProps = (state: BundleState): StateProps => ({
    items: experimentsSelector(state),
});

export default compose(
    preload({
        onLoad,
    }),
)(connect(mapStateToProps)(ExperimentsTable));
