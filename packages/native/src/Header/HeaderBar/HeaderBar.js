import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper, HeaderContainer } from './HeaderBar.style';
import { StatusBarComponent } from '../StatusBar/StatusBar';

const HeaderBar = ({options : { StatusBarOptions = {} }, children}) => {
    return (
        <HeaderWrapper>
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
