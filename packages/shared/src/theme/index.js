import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme as defaultTheme } from './definitions';

const ThemeWrapper = ({children, theme = {}}) => {
    return (
        <ThemeProvider theme={{...theme, ...defaultTheme}}>
            {children}
        </ThemeProvider>
    );
};

export default ThemeWrapper;
