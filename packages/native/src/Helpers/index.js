import React from 'react';
import { useTheme } from 'emotion-theming';
import { MarginStyle, MarginHorizontalStyle, MarginVerticalStyle } from './Helpers.style';

const Margin = ({ children, style }) => {
    const theme = useTheme();
    return (
        <MarginStyle theme={theme} style={style}>
            {children}
        </MarginStyle>
    );
};

const MarginHorizontal = ({ children, style }) => {
    const theme = useTheme();
    return (
        <MarginHorizontalStyle theme={theme} style={style}>
            {children}
        </MarginHorizontalStyle>
    );
};

const MarginVertical = ({ children, style }) => {
    const theme = useTheme();
    return (
        <MarginVerticalStyle theme={theme} style={style}>
            {children}
        </MarginVerticalStyle>
    );
};

export { Margin, MarginHorizontal, MarginVertical };
