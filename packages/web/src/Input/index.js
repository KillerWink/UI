import React from 'react';
import InputDefault from './InputDefault';
import InputAnimated from './InputAnimated';

const Input = ({ children, color = '#5E5E5E', style, className }) => {
    return (
        <InputDefault color={color} style={style} className={className}>
            {children}
        </InputDefault>
    );
};

Input.Animated = ({ children, color = '#5E5E5E', style, className }) => {
    return (
        <InputAnimated color={color} styles={style} className={className}>
            { children }
        </InputAnimated>
    );
};

export default Input;
