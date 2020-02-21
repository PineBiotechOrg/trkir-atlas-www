import {Select} from 'antd';
import moment from 'moment';
import React from 'react';

import {Feature} from 'infrastructure/plots';

import FeaturesPlot from './components/plot';
import {FEATURES_OPTIONS} from './consts';
import {Props, State, OmittedFeature} from './types';

import {b} from './Features.scss';

export default class Features extends React.PureComponent<Props, State> {
    public state: State = {
        option: 'x_center',
    };

    public render() {
        const {url} = this.props;
        const {option} = this.state;

        return (
            <React.Fragment>
                <h3>Features</h3>

                <Select<keyof OmittedFeature>
                    placeholder="Choose feature"
                    onChange={this.handleChangeOption}
                    className={b('select')}
                    defaultValue={option}
                >
                    {FEATURES_OPTIONS.map(({value, title}) => (
                        <Select.Option
                            key={value}
                            value={value}
                        >
                            {title}
                        </Select.Option>
                    ))}
                </Select>

                <FeaturesPlot
                    url={url}
                    matcher={this.matchDataItem}
                />
            </React.Fragment>
        );
    }

    private matchDataItem = (item: Feature) => {
        const {option} = this.state;

        return {
            x: moment(item.date),
            y: item?.[option],
        };
    };

    private handleChangeOption = (option: keyof OmittedFeature) => {
        this.setState({option});
    }
}
