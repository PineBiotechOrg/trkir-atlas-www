import {connect} from 'react-redux';

import {pcaDataSelector} from '../../selectors/plots';
import {BundleState} from '../../types';
import ExperimentsTableItemPca from './ExperimentsTableItemPca';
import {StateProps} from './types';

const mapStateToProps = (state: BundleState): StateProps => ({
    data: pcaDataSelector(state),
});

export default connect(mapStateToProps)(ExperimentsTableItemPca);
