import React from 'react';
import { ThemeWrapper } from '@killerui/shared';
import { Wrapper } from './Bootstrap.style';

const Bootstrap = ({ children, theme = {} }) => {
    return (
        <ThemeWrapper theme={theme}>
            <Wrapper>
                {children}
            </Wrapper>
        </ThemeWrapper>
    );
};

export default Bootstrap;
