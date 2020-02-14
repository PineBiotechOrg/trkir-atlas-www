import React, {ComponentType} from 'react';
import {Reducer} from 'redux';

import {CommonStore} from 'client/utils/infrastructure/store';
import store, {ExtendedState} from 'client/utils/infrastructure/store';
import isServer from 'client/utils/isServerEnvCheker';

import {Assign, Indexed} from 'infrastructure/utils';

// позволяет проверить, что переданный extention соответствует заявленному в BundleState
type ExtractExtention<TBundleState> = TBundleState extends Assign<CommonStore, infer E>
    ? {[K in keyof E]: Reducer<E[K]>}
    : never;

export default function storeExtension<E extends ExtendedState<any> = any>(extention: Partial<ExtractExtention<E>>) {
    return <P extends Indexed>(Component: ComponentType<P>) => {
        let isExtended = false;

        class StoreExtension extends React.PureComponent<P> {
            public static displayName = `StoreExtention(${Component.displayName})`;

            constructor(props: P) {
                super(props);

                if (!isExtended && !isServer) {
                    store.recombineStoreWith(extention);
                    isExtended = true;
                }
            }

            public render() {
                return (
                    <Component {...this.props}/>
                );
            }
        }

        return StoreExtension;
    };
}
