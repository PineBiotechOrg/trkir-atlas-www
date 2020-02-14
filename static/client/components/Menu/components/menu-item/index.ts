import {connect} from 'react-redux';

import {CommonStore} from 'client/utils/infrastructure/store';

import MenuItem from './MenuItem';
import {StateProps} from './types';

const mapStateToProps = (state: CommonStore): StateProps => ({
    menuUI: {
        isCollapse: state.menu.ui.isCollapse,
    },
});

export default connect(mapStateToProps)(MenuItem);
