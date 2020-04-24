import React from 'react';
import { useTheme } from 'emotion-theming';
import { NavItemContainer } from './BottomNavBar.style';

const BottomNavItem = ({ TabElements, isFocused }) => {
    const theme = useTheme();
    return (
        <NavItemContainer theme={theme} isFocused={isFocused}>
            <TabElements isFocused={isFocused} />
        </NavItemContainer>
    );
};


export default BottomNavItem;
