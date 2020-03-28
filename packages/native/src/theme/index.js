import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import defaultTheme from './definitions';

const KillerWink = ({theme, children}) => {
    return (
        <ThemeProvider theme={{...theme, ...defaultTheme}}>
            {children}
        </ThemeProvider>
    );
};

export default KillerWink;
