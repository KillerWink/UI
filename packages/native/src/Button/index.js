import React from 'react';
import ButtonDefault from './ButtonDefault';
import ButtonAnimated from './ButtonAnimated';
import ButtonCustomCorners from './ButtonCustomCorners';

const Button = ({ children, color = '#5E5E5E', style }) => {
    return (
        <ButtonDefault color={color} style={style}>
            {children}
        </ButtonDefault>
    );
};

Button.Animated = ({ children, color = '#5E5E5E', styles }) => {
    return (
        <ButtonAnimated color={color} styles={styles}>
            { children }
        </ButtonAnimated>
    );
};

Button.Cornered = ({ children, style }) => {
    return (
        <ButtonCustomCorners style={style}>
            { children }
        </ButtonCustomCorners>
    );
};

export default Button;
