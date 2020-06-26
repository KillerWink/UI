import React from 'react';
import { useTheme } from 'emotion-theming';
import { NavContainer } from './BottomNavBar.style';
import BottomNavController from './BottomNavController';
import { SafeAreaView } from 'react-native';

const BottomNavBar = (props) => {
    const theme = useTheme();
    const { children, style } = props;
    return (
        <SafeAreaView>
            <NavContainer theme={theme} style={style}>
                <BottomNavController {...props}>
                    {children}
                </BottomNavController>
            </NavContainer>
        </SafeAreaView>
    );
};


export default BottomNavBar;
