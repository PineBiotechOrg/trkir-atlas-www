import React, {PureComponent} from 'react';
import {Player, BigPlayButton} from 'video-react';

import {Props} from './types';

export default class VideoStream extends PureComponent<Props> {
    public render() {
        const {className, _ref} = this.props;

        return (
            <div className={className}>
                <Player ref={_ref} autoPlay controls>
                    <source/>
                    <BigPlayButton position="center"/>
                </Player>
            </div>
        );
    }
}
