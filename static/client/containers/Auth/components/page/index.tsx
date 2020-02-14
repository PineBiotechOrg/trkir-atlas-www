import {connect} from 'react-redux';
import {compose} from 'redux';

import {getStatus} from 'client/selectors/auth';
import asPage from 'client/utils/hocs/asPage';
import preload from 'client/utils/hocs/preload';
import {CommonStore} from 'client/utils/infrastructure/store';

import Page from './Page';
import {onLoad} from './preload';
import {StateProps} from './types';

const mapStateToProps = (state: CommonStore): StateProps => {
    return {
        status: getStatus(state),
    };
};

export default compose (
    connect(mapStateToProps),
    preload({onLoad}),
    asPage({
        title: Page.pageTitle,
        name: Page.pagename,
    }),
)(Page);
