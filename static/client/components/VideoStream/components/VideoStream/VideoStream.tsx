import React, {PureComponent} from 'react';

import {Props, State} from './types';

export default class VideoStream extends PureComponent<Props, State> {
    state = {
        random: 0,
    };

    public componentDidMount() {
        setInterval(() => {
            this.setState({random: this.state.random + 1})
        }, 1000);
    }

    public render() {
        const {className, _ref, source} = this.props;
        const {random} = this.state;

        return (
            <iframe
                key={random}
                className={className}
                src={`https://tst-01.vpa.group:8062/${source}`}
                height={800}
                width={800}
                ref={_ref}
            />
        );
    }
}
