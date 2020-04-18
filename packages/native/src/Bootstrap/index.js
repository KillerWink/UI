import React from 'react';
import { ThemeWrapper } from '@killerui/shared';

const Bootstrap = ({ children, theme }) => {
    return (
        <ThemeWrapper theme={theme}>
            {children}
        </ThemeWrapper>
    );
};

export default Bootstrap;
