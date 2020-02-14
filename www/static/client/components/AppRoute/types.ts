import {RouteProps} from 'react-router';

import {Indexed} from 'infrastructure/utils';


export type Props = RouteProps & {
    componentProps?: Indexed;
};
