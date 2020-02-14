import {storiesOf} from '@storybook/react';
import React from 'react';

import Spinner from '../index';

storiesOf('Spinner', module)
    .add('Simple example', () => (
        <Spinner/>
    ));
