import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper, HeaderContainer } from './HeaderBar.style';

const HeaderBar = ({children}) => {
    return (
        <HeaderWrapper>
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
