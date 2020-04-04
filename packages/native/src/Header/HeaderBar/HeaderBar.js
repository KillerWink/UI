import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { HeaderWrapper, HeaderContainer } from './HeaderBar.style';
import { StatusBarComponent } from '../StatusBar';

const HeaderBar = ({ StatusBarOptions = {}, children, styles }) => {
    const theme = useTheme();
    return (
        <HeaderWrapper theme={theme} styles={styles}>
            <StatusBarComponent options={StatusBarOptions} />
            <HeaderContainer>
                {children}
            </HeaderContainer>
        </HeaderWrapper>
    );
};

HeaderBar.propTypes = {
    children: PropTypes.node,
};

export default HeaderBar;
