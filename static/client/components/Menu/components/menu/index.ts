import {connect} from 'react-redux';
import {compose} from 'redux';

import preload from 'client/utils/hocs/preload';
import {CommonStore} from 'client/utils/infrastructure/store';

import {menuGroupsSelector} from '../../selectors/sections';
import {activePathSelector} from '../../selectors/sidebar';
import Menu from './Menu';
import {onLoad} from './preloader';
import {StateProps} from './types';

const mapStateToProps = (state: CommonStore): StateProps => ({
    menuGroups: menuGroupsSelector(state),
    activePaths: activePathSelector(state),
    menuUI: {
        isCollapse: state.menu.ui.isCollapse,
    },
});

export default compose<any>(
    preload({
        onLoad,
    }),
    connect(mapStateToProps),
)(Menu);
