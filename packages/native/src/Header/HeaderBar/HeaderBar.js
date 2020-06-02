import React from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { HeaderWrapper, HeaderContainer } from './HeaderBar.style';
import { StatusBarComponent } from '../StatusBar';

const HeaderBar = ({ StatusBarOptions = {}, children, style, height }) => {
    const theme = useTheme();
    return (
        <HeaderWrapper height={height + (Platform.OS === 'ios' ? getStatusBarHeight() : 0)} theme={theme} style={style}>
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
