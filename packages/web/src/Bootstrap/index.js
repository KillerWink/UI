import React from 'react';
import { ThemeWrapper } from '@killerui/shared';
import { Wrapper } from './Bootstrap.style';

const Bootstrap = ({ children }) => {
    return (
        <ThemeWrapper>
            <Wrapper>
                {children}
            </Wrapper>
        </ThemeWrapper>
    );
};

export default Bootstrap;
