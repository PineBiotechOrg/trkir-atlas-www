import React, {RefObject} from 'react';

import {pybackendApi} from 'client/utils/transport';

export interface BaseStream {
    source: string;
    _ref?: RefObject<HTMLSourceElement>;
}

interface StreamResponse {
    fragment_url: string;
    timestamp: string;
}

interface State {
    nextFragment: string;
}

export default function stream<T extends BaseStream>() {
    return (Component: React.ComponentType<T>): React.ComponentType<T> => {
        class StreamingComponent extends React.PureComponent<T, State> {
            private _ref = React.createRef<HTMLSourceElement>();

            public state = {
                nextFragment: null,
            };

            public componentDidMount() {
                // TODO: Переделать на arrayBuffer
                (this._ref.current as any).video.video.addEventListener('ended', this.handleVideoEnded, false);
                this.handleVideoEnded();
            }

            public componentWillUnmount() {
                (this._ref.current as any).video.video.removeEventListener('ended', this.handleVideoEnded);
            }

            public render() {
                return (
                    <React.Fragment>
                        <Component {...this.props} _ref={this._ref}/>
                    </React.Fragment>
                );
            }

            private handleVideoEnded = () => {
                const {source} = this.props;
                const {nextFragment} = this.state;

                return pybackendApi.get<{ timestamp?: string }, StreamResponse>(
                    source,
                    {timestamp: nextFragment},
                )
                    .then(({fragment_url, timestamp}) => {
                        this.setState({nextFragment: timestamp});
                        if (fragment_url) {
                            ((this._ref.current as any).video.video as HTMLVideoElement).src = fragment_url;
                            ((this._ref.current as any).video.video as HTMLVideoElement).load();
                            return;
                        }

                        setTimeout(() => {
                            return this.handleVideoEnded();
                        }, 200);

                        // ((this._ref.current as any).video.video as HTMLVideoElement).src = 'https://storage.yandexcloud.net/trkir-test/7/1582016753.461868.mp4';
                        // ((this._ref.current as any).video.video as HTMLVideoElement).load();
                    });
            };
        }

        return StreamingComponent;
    };
}
