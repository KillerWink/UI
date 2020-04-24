import React from 'react';
import { useTheme } from 'emotion-theming';
import { IconWrapper } from './Icons.style';
import Back from './Back';
import Menu from './Menu';
import Search from './Search';
import Star from './Star';

const Icons = ({ children, size = "small", style }) => {
    const theme = useTheme();
    return (
        <IconWrapper theme={theme} size={size} style={style}>
            {children}
        </IconWrapper>
    );
};

Icons.Back = ({color}) => {
    return (
        <Back color={color} />
    );
};

Icons.Menu = ({color}) => {
    return (
        <Menu color={color} />
    );
};

Icons.Search = ({color}) => {
    return (
        <Search color={color} />
    );
};

Icons.Star = ({color}) => {
    return (
        <Star color={color} />
    );
};

export default Icons;
