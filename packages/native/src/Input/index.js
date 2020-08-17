import React from 'react';
import { View } from 'react-native';
import InputDefault from './InputDefault';
import InputAnimated from './InputAnimated';
import InputBtn from './InputWithBtn';

const Input = ({ children }) => {
    return (
        <View>
            {children}
        </View>
    );
};

Input.Default = ({ hasError, textChange, style, placeholder }) => {
    return (
        <InputDefault hasError={hasError} textChange={textChange} style={style} placeholder={placeholder} />
    );
};

Input.Search = ({ hasError, textChange, style, placeholder }) => {
    return (
        <InputAnimated hasError={hasError} textChange={textChange} style={style} placeholder={placeholder} />
    );
};

Input.Btn = ({ hasError, textChange, style, placeholder, shouldFocused, onSubmit }) => {
    return (
        <InputBtn hasError={hasError} textChange={textChange} style={style} placeholder={placeholder} shouldFocused={shouldFocused} onSubmit={onSubmit} />
    );
};

export default Input;
