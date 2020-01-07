import React from 'react';
import Plot from 'react-plotly.js';

import { Props } from './types';

export default function Plotly(props: Props) {
    return (
        <Plot { ...props }/>
    );
}
