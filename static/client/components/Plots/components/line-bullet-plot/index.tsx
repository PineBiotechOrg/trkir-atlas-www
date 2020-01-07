import React from 'react';

import renderOnClientSideOnly from 'client/utils/serverSide/renderOnClientSideOnly';

import { OwnProps } from './types';

export default (props: OwnProps) => {
    const {default: LineBulletPlot} = require('./LineBulletPlot');

    return renderOnClientSideOnly(LineBulletPlot, props);
};
