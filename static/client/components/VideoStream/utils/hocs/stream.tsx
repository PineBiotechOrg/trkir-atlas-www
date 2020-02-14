import React, {RefObject} from 'react';

import {pybackendApi} from 'client/utils/transport';

export interface BaseStream {
    source: string;
    _ref?: RefObject<HTMLIFrameElement>;
}

export default function stream<T extends BaseStream>() {
    return (Component: React.ComponentType<T>): React.ComponentType<T> => {
        class StreamingComponent extends React.PureComponent<T> {
            private _ref = React.createRef<HTMLIFrameElement>();
            private intervalId: number;

            public componentDidMount() {
                this.createInterval();
            }

            public componentDidUpdate() {
                this.createInterval();
            }

            public componentWillUnmount() {
                if (this.intervalId) {
                    clearInterval(this.intervalId);
                }
            }

            public render() {
                return (
                    <React.Fragment>
                        <Component {...this.props} _ref={this._ref}/>
                    </React.Fragment>
                );
            }

            private createInterval = () => {
                if (!this.intervalId) {
                    // const {source} = this.props;

                    this.intervalId = window?.setInterval(
                        async () => {
                            const test = await pybackendApi.formData('/mice/mouse/2/image/');
                            const file = await test.blob();
                            const url = URL.createObjectURL(file);
                            this._ref.current.addEventListener('load', () => {
                                return URL.revokeObjectURL(url);
                            });
                            this._ref.current
                        },
                        1000,
                    );
                }
            };
        }

        return StreamingComponent;
    };
}
