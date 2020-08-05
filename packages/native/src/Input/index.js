import React from 'react';
import { View } from 'react-native';
import InputDefault from './InputDefault';
import InputAnimated from './InputAnimated';

const Input = ({ children }) => {
    return (
        <View>
            {children}
        </View>
    );
};

Input.Default = ({ hasError, textChange, style }) => {
    return (
        <InputDefault hasError={hasError} textChange={textChange} style={style} />
    );
};

Input.Search = ({ hasError, textChange, style }) => {
    return (
        <InputAnimated hasError={hasError} textChange={textChange} style={style} />
    );
};

export default Input;
