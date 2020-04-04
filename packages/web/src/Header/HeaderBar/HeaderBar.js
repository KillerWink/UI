import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { HeaderWrapper, HeaderContainer } from './HeaderBar.style';

const HeaderBar = ({children, styles}) => {
    const theme = useTheme();
    return (
        <HeaderWrapper theme={theme} styles={styles}>
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
