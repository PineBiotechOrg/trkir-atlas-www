import {connect} from 'react-redux';
import {compose} from 'redux';

import preload from 'client/utils/hocs/preload';

import {filteredMiceSelector} from '../../selectors/experiments';
import {BundleState} from '../../types';
import MicePCA from './MicePCA';
import {onLoad} from './preloader';
import {StateProps} from './types';

const mapStateToProps = (state: BundleState): StateProps => ({
    mice: filteredMiceSelector(state),
});

export default compose<any>(
    preload({
        onLoad,
    }),
    connect(mapStateToProps),
)(MicePCA);
