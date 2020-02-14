import renderOnClientSideOnly from 'client/utils/serverSide/renderOnClientSideOnly';

import {Props} from './types';

export default (props: Props) => {
    const {default: Plotly} = require('./Plotly');

    return renderOnClientSideOnly(Plotly, props);
};
