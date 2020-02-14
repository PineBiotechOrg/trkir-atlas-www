import React from 'react';

import {Plotly} from 'client/components/Plots';

import {Props} from './types';

import {b} from './ExperimentsTableItemPca.scss';


export default class ExperimentsTableItemPca extends React.PureComponent<Props> {
    public render() {
        const {data} = this.props;

        return (
            <div className={b()}>
                <Plotly
                    data={data}
                    layout={null}
                />
            </div>
        );
    }
}
