import {Page} from 'page';
import React from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router';
import {compose} from 'redux';

import {bound as commonActions} from 'client/actions';
import {userLoginSelector} from 'client/selectors/user';
import {CommonStore} from 'client/utils/infrastructure/store';

export default function asPage<T>(params: Page) {
    return (ComposedComponent: React.ComponentType<T>) => {
        interface StateProps {
            isReady: boolean;
            routeProps: RouteComponentProps<any>;
            login: string;
        }

        type Props = StateProps & RouteComponentProps<any>;

        class Page extends React.PureComponent<Props & T> {
            public static defaultProps: Partial<Props> = {
                isReady: true, // TODO: обработать
            };

            public componentDidMount() {
                const {preloader} = params;
                const {routeProps} = this.props;

                if (preloader) {
                    preloader({routeProps});
                } else {
                    commonActions.page.setAsReady();
                }
            }

            public render() {
                const {isReady, login, routeProps} = this.props;
                const {title} = params;
                const path = routeProps.location.pathname;

                if(!login && path !== '/auth') {
                    return null;
                }

                return (
                    <React.Fragment>
                        {
                            isReady && (
                                <Helmet>
                                    <title>{ title }</title>
                                </Helmet>
                            )
                        }

                        <ComposedComponent {...this.props}/>
                    </React.Fragment>
                );
            }
        }

        const mapStateToProps = (state: CommonStore, ownProps: RouteComponentProps<any>): StateProps => {
            return {
                isReady: state.page.isReady,
                routeProps: ownProps,
                login: userLoginSelector(state),
            };
        };

        return compose(
            withRouter,
            connect(mapStateToProps),
        )(Page);
    };
}
