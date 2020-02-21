import {compose} from 'redux';

import preload from 'client/utils/hocs/preload';

import DashboardMice from './DashboardMice';
import {onLoad} from './preloader';

export default compose<any>(
    preload({
        onLoad,
    }),
)(DashboardMice);
