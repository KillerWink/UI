import React from 'react';
import { ThemeWrapper } from '@killerui/shared';

const Bootstrap = ({ children }) => {
    return (
        <ThemeWrapper>
            {children}
        </ThemeWrapper>
    );
};

export default Bootstrap;
