import {CSSProperties} from 'react';
import styled from 'styled-components';

export const LayoutWrapper = styled.div`
    & > .ant-layout {
        min-height: 100vh;
    }
`;

export const mainLayoutStyles: CSSProperties = {
    minHeight: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
};

export const contentLayoutStyles: CSSProperties = {
    background: '#ffffff',
};

export const contentStyles: CSSProperties = {
    height: '100vh',
    overflow: 'initial',
    padding: '0 16px 16px',
};
