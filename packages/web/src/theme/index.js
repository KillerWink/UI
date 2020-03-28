import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme as defaultTheme } from '@killerui/native';

const KillerWink = ({children, theme = {}}) => {
    return (
        <ThemeProvider theme={{...defaultTheme, ...theme}}>
            {children}
        </ThemeProvider>
    );
};

export default KillerWink;
