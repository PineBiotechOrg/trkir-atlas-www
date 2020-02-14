import React from 'react';
import {Redirect} from 'react-router';

import {EXPERIMENTS_PATH} from '../../consts';

export default function IndexRedirect() {
    return <Redirect to={EXPERIMENTS_PATH}/>;
}
