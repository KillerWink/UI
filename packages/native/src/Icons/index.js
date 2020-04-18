import React from 'react';
import { useTheme } from 'emotion-theming';
import { IconWrapper } from './Icons.style';
import Back from './Back';
import Menu from './Menu';
import Search from './Search';
import Star from './Star';

const Icons = ({ children, styles }) => {
    const theme = useTheme();
    return (
        <IconWrapper theme={theme} styles={styles}>
            {children}
        </IconWrapper>
    );
};

Icons.Back = () => {
    return (
        <Back />
    );
};

Icons.Menu = () => {
    return (
        <Menu />
    );
};

Icons.Search = () => {
    return (
        <Search />
    );
};

Icons.Star = () => {
    return (
        <Star />
    );
};

export default Icons;
