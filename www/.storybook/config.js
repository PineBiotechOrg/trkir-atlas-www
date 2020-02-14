import { configure } from '@storybook/react';

import 'antd/dist/antd.css';

const req = require.context('../static/client', true, /\.stories\.tsx?$/);

function loadStories() {
    req.keys().forEach(filename => {
        req(filename);
    });
}

configure(loadStories, module);
