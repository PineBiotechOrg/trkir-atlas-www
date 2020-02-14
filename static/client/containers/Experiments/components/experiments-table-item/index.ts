import {connect} from 'react-redux';
import {compose} from 'redux';

import {experimentSelector} from 'client/selectors/experiments';
import preload from 'client/utils/hocs/preload';

import {filteredMiceSelector} from '../../selectors/experiments';
import {BundleState} from '../../types';
import ExperimentsTableItem from './ExperimentsTableItem';
import {onLoad} from './preloader';
import {StateProps} from './types';

const mapStateToProps = (state: BundleState): StateProps => ({
    item: experimentSelector(state),
    mice: filteredMiceSelector(state),
});

export default compose<any>(
    preload({
        onLoad,
    }),
    connect(mapStateToProps),
)(ExperimentsTableItem);

