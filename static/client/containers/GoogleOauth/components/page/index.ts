import preload from 'client/utils/hocs/preload';

import Page from './Page';
import {onLoad} from './preloader';

export default preload({onLoad})(Page);
