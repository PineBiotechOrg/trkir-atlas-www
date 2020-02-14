import {CSSProperties} from 'react';
import styled from 'styled-components';

export const CenterWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    margin-left: 0;
    margin-right: 0;
    text-align: center;
    transform: translateY(50%);
`;

export const spinStyles: CSSProperties = {
    position: 'relative',
    top: 10,
};
