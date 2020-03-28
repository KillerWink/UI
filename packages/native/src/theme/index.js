import React from 'react'
import { ThemeProvider } from 'emotion-theming';
import defaultTheme from './definitions';

const killerWink = ({theme, children}) => {
    return (
        <ThemeProvider theme={{...theme, ...defaultTheme}}>
            {children}
        </ThemeProvider>
    );
};

export default killerWink;
