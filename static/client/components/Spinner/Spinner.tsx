import {Spin} from 'antd';
import React from 'react';

import {spinStyles, CenterWrapper} from './styles';

export default function Spinner() {
    return (
        <CenterWrapper>
            <Spin size="large" style={spinStyles}/>
        </CenterWrapper>
    );
}
