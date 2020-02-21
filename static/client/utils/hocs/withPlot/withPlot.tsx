import {notification} from 'antd';
import React, {ComponentType} from 'react';
import {connect} from 'react-redux';

import {bound as commonActions} from 'client/actions';
import {CommonStore} from 'client/utils/infrastructure/store';
import {pybackendApi} from 'client/utils/transport';

import {MAX_RETRIES} from './consts';
import {listSelector, errorSelector} from './selector';
import {
    PDList,
    RequestDataResponse,
    RequestQuery,
    StateProps,
    WithPlotOptions,
} from './types';

export default function withPlot<T, PD>(options: WithPlotOptions<PD>) {
    return (Component: ComponentType<T>) => {
        const {
            id,
            fetch: {postResponse},
            timeout,
        } = options;

        interface OwnProps {
            url: string;
            matcher?: (item: PD) => unknown;
        }

        type Props = StateProps<PD> & OwnProps & T;

        interface State {
            localError: unknown | null;
            intervalId: number | null;
            nextFragment: string | null;
            retries: number;
        }

        class WrapperComponent extends React.PureComponent<Props, State> {
            public state: State = {
                localError: null,
                intervalId: null,
                nextFragment: null,
                retries: 0,
            };

            public componentDidMount() {
                const {preloader} = options;
                commonActions.plots.init({id, options});

                if (preloader) {
                    return Promise.resolve(preloader())
                        .then(() => {
                            this.startFetching();
                        })
                        .catch((error: unknown) => {
                            this.setState({localError: error});
                        });
                }

                this.startFetching();
            }

            public componentWillUnmount() {
                const {intervalId} = this.state;
                if (intervalId) {
                    window?.clearInterval(intervalId);
                }
            }

            public render() {
                const {localError} = this.state;

                if (localError) {
                    return (
                        <div>
                            <h2>Something went wrong when preload plot.</h2>
                            <details>
                                { localError?.toString() }
                            </details>
                        </div>
                    );
                }

                const {data, matcher} = this.props;

                return (
                    <Component
                        {...this.props}
                        data={matcher ? data.map(matcher) : data}
                    />
                );
            }

            private startFetching = () => {
                const intervalId = window?.setInterval(this.requestData, timeout);
                this.setState({intervalId});
            };

            private requestData = () => {
                commonActions.plots.startLoading({id});
                const {nextFragment, retries} = this.state;
                const {url} = this.props;

                return pybackendApi.get<RequestQuery, RequestDataResponse<PD>>(
                    url,
                    {timestamp: nextFragment || ''},
                )
                    .then(response => {
                        this.setState({nextFragment: response.timestamp});
                        return postResponse(response);
                    })
                    .then(data => {
                        commonActions.plots.success({
                            id,
                            items: data as PDList<PD>,
                        });

                        if (retries > 0) {
                            this.setState({retries: 0});
                        }
                    })
                    .catch(error => {
                        notification.warning({
                            message: 'Something went wrong when request fragment of plot data',
                            description: error?.toString(),
                        });
                        commonActions.plots.error({id, error});

                        const {retries} = this.state;
                        if (retries > MAX_RETRIES) {
                            this.setState({localError: error});
                        }

                        this.setState({retries: retries + 1});
                    })
                    .then(() => {
                        commonActions.plots.stopLoading({id});
                    });
            };
        }

        const listIdSelector = listSelector<PD>(id);
        const errorIdSelector = errorSelector<PD>(id);

        const mapStateToProps = (state: CommonStore): StateProps<PD> => ({
            data: listIdSelector(state),
            error: errorIdSelector(state),
        });

        return connect(mapStateToProps)(WrapperComponent);
    };
}
