import React from 'react';

import isServer from 'client/utils/isServerEnvCheker';

export default function renderOnClientSideOnly(
    Component: React.ComponentType,
    props: unknown,
) {
    if (isServer) {
        return (
            <React.Fragment/>
        );
    }

    return <Component {...props}/>;
}
