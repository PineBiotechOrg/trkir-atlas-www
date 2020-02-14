import renderOnClientSideOnly from 'client/utils/serverSide/renderOnClientSideOnly';

import {OwnProps} from './types';

export default (props: OwnProps) => {
    const {default: SimplePlot} = require('./SimplePlot');

    return renderOnClientSideOnly(SimplePlot, props);
};
