import React from 'react';
import { View } from 'react-native';
import InputDefault from './InputDefault';
import InputAnimated from './InputAnimated';
import InputBtn from './InputWithBtn';
import InputPhone from './InputPhone';
import InputOTP from './InputOTP';

const Input = ({ children }) => {
    return (
        <View>
            {children}
        </View>
    );
};

Input.Default = ({ hasError, textChange, style, placeholder, ref, keyboardType, autoCapitalize }) => {
    return (
        <InputDefault hasError={hasError} textChange={textChange} style={style} placeholder={placeholder} ref={ref} keyboardType={keyboardType} autoCapitalize={autoCapitalize} />
    );
};

Input.InputOTP = ({ hasError, textChange, style, submitCode, autoCapitalize }) => {
    return (
        <InputOTP hasError={hasError} textChange={textChange} style={style} submitCode={submitCode} autoCapitalize={autoCapitalize} />
    );
};

Input.Phone = ({ country, hasError, textChange, style, placeholder, openPrefixModal, ref }) => {
    return (
        <InputPhone openPrefixModal={openPrefixModal} country={country} hasError={hasError} textChange={textChange} style={style} placeholder={placeholder} ref={ref} />
    );
};

Input.Search = ({ hasError, textChange, style, placeholder, ref }) => {
    return (
        <InputAnimated hasError={hasError} textChange={textChange} style={style} placeholder={placeholder} ref={ref} />
    );
};

Input.Btn = ({ hasError, textChange, style, placeholder, shouldFocused, onSubmit }) => {
    return (
        <InputBtn hasError={hasError} textChange={textChange} style={style} placeholder={placeholder} shouldFocused={shouldFocused} onSubmit={onSubmit} />
    );
};

export default Input;
