import React from 'react';
import ButtonDefault from './ButtonDefault';
import ButtonAnimated from './ButtonAnimated';

const Button = ({ children, color = '#5E5E5E', style, className }) => {
    return (
        <ButtonDefault color={color} style={style} className={className}>
            {children}
        </ButtonDefault>
    );
};

Button.Animated = ({ children, color = '#5E5E5E', style, className }) => {
    return (
        <ButtonAnimated color={color} styles={style} className={className}>
            { children }
        </ButtonAnimated>
    );
};

export default Button;
