import renderOnClientSideOnly from 'client/utils/serverSide/renderOnClientSideOnly';

import {OwnProps} from './types';

export default (props: OwnProps) => {
    const {default: BarPlot} = require('./BarPlot');

    return renderOnClientSideOnly(BarPlot, props);
};
