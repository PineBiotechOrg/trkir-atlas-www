import {RouteComponentProps} from 'react-router';

import {bound as commonActions} from 'client/actions';

export function onLoad({location: {pathname}}: RouteComponentProps) {
    if (pathname === '/') {
        commonActions.menu.sidebar.setActiveStart();
        return;
    }

    commonActions.menu.sidebar.setActive(pathname);
}
