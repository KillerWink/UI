import React from 'react';
import InputDefault from './InputDefault';
import InputAnimated from './InputAnimated';

const Input = ({ children, color = '#5E5E5E', style }) => {
    return (
        <InputDefault color={color} style={style}>
            {children}
        </InputDefault>
    );
};

Input.Animated = ({ children, color = '#5E5E5E', styles }) => {
    return (
        <InputAnimated color={color} styles={styles}>
            { children }
        </InputAnimated>
    );
};

export default Input;
