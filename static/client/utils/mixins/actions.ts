import {ActionFunction1} from 'redux-actions';

import {Indexed} from 'infrastructure/utils';


export default (actions: Indexed<ActionFunction1<any, any>>) => {
    return Class => {
        Object.keys(actions).forEach(action => {
            if (!Class[action]) {
                Class[action] = actions[action];
            }
        });

        return Class;
    };
};
