import React from 'react';
import { useTheme } from 'emotion-theming';
import { NavContainer } from './BottomNavBar.style';
import BottomNavController from './BottomNavController';

const BottomNavBar = (props) => {
    const theme = useTheme();
    const { children, style } = props;
    return (
        <NavContainer theme={theme} style={style}>
            <BottomNavController {...props}>
                {children}
            </BottomNavController>
        </NavContainer>
    );
};


export default BottomNavBar;
