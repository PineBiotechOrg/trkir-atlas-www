import renderOnClientSideOnly from 'client/utils/serverSide/renderOnClientSideOnly';

import {OwnProps} from './types';

export default (props: OwnProps) => {
    const {default: GanttPlot} = require('./GanttPlot');

    return renderOnClientSideOnly(GanttPlot, props);
};
