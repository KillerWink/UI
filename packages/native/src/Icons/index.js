import React from 'react';
import { useTheme } from 'emotion-theming';
import { IconWrapper } from './Icons.style';
import Back from './Back';
import Menu from './Menu';
import Search from './Search';
import Star from './Star';
import Custom from './Custom';
import AutoPlay from './AutoPlay';

const Icons = ({ children, size = "small", svg={}, style }) => {
    const theme = useTheme();
    return (
        <IconWrapper theme={theme} size={size} style={style} svg={svg}>
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

Icons.Custom = ({svg, color}) => {
    return (
        <Custom color={color} svg={svg} />
    );
};

Icons.AutoPlay = ({svg, color}) => {
    return (
        <AutoPlay color={color} svg={svg} />
    );
};

export default Icons;
