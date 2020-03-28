import { ThemeProvider } from 'emotion-theming';
import defaultTheme from '@UI/packages/native/theme/definitions';

const killerWink = ({theme, children}) => {
    return (
        <ThemeProvider theme={{...theme, ...defaultTheme}}>
            {children}
        </ThemeProvider>
    );
};

export default killerWink;
