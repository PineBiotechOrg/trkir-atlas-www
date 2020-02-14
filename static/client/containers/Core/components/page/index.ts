import {hot} from 'react-hot-loader';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {menuCollapseState} from 'client/components/Menu/selectors/ui';
import preload from 'client/utils/hocs/preload';
import {CommonStore} from 'client/utils/infrastructure/store';

import {getLogin} from '../../selectors/core';
import Page from './Page';
import {onLoad} from './preload';
import {StateProps} from './types';

const mapStateToProps = (state: CommonStore): StateProps => {
    return {
        login: getLogin(state),
        menuUI: {
            isCollapse: menuCollapseState(state),
        },
    };
};

export default compose(
    preload({onLoad}),
    connect(mapStateToProps),
    hot(module),
)(Page);
