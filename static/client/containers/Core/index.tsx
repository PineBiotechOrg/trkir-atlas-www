import React from 'react';
import Loadable from 'react-loadable';

const AsyncPage = Loadable({
    loader: () => import(/* webpackChunkName: "Core" */ './components/page'),
    loading: () => <div>Loading...</div>,
} as Loadable.Options<unknown, never>);

export default AsyncPage;
