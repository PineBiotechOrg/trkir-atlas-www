import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {compose} from 'redux';

import asPage from 'client/utils/hocs/asPage';
import storeExtension from 'client/utils/hocs/storeExtension';

import cameras from '../../reducers';
import {getCameraId} from '../../selectors/router';
import {BundleState} from '../../types';
import Page from './Page';
import {StateProps, OwnProps} from './types';

const mapStateToProps = (_: BundleState, ownProps: OwnProps): StateProps =>({
    cameraId: getCameraId(ownProps),
});

export default compose(
    asPage({
        title: Page.pageTitle,
        name: Page.pageName,
    }),
    withRouter,
    storeExtension<BundleState>({cameras}),
    connect(mapStateToProps),
)(Page);
