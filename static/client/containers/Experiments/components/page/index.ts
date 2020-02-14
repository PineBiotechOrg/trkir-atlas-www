import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {compose} from 'redux';

import asPage from 'client/utils/hocs/asPage';
import storeExtension from 'client/utils/hocs/storeExtension';

import experiments from '../../reducers';
import {getExperimentsId, getExperimentId} from '../../selectors/router';
import {BundleState} from '../../types';
import Page from './Page';
import {OwnProps, StateProps} from './types';

const mapStateToProps = (_: BundleState, ownProps: OwnProps): StateProps => ({
    id: getExperimentsId(ownProps),
    experimentId: getExperimentId(ownProps),
});

export default compose(
    asPage({
        title: Page.pageTitle,
        name: Page.pageName,
    }),
    withRouter,
    connect(mapStateToProps),
    storeExtension<BundleState>({experiments}),
)(Page);
