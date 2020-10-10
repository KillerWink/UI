import React from 'react';
import { View } from 'react-native';
import InputDefault from './InputDefault';
import InputAnimated from './InputAnimated';
import InputBtn from './InputWithBtn';
import InputPhone from './InputPhone';
import InputOTP from './InputOTP';
import InputNoEdit from './NoEdit';

const Input = ({ children }) => {
    return (
        <View>
            {children}
        </View>
    );
};

Input.Default = ({ hasError, textChange, style, placeholder, ref, keyboardType, autoCapitalize, value }) => {
    return (
        <InputDefault hasError={hasError} textChange={textChange} style={style} placeholder={placeholder} ref={ref} keyboardType={keyboardType} autoCapitalize={autoCapitalize} value={value} />
    );
};

Input.InputOTP = ({ hasError, textChange, style, submitCode, autoCapitalize }) => {
    return (
        <InputOTP hasError={hasError} textChange={textChange} style={style} submitCode={submitCode} autoCapitalize={autoCapitalize} />
    );
};

Input.Phone = ({ country, hasError, textChange, style, placeholder, openPrefixModal, ref, value }) => {
    return (
        <InputPhone openPrefixModal={openPrefixModal} country={country} hasError={hasError} textChange={textChange} style={style} placeholder={placeholder} ref={ref} value={value} />
    );
};

Input.Search = ({ hasError, textChange, style, placeholder, ref, value }) => {
    return (
        <InputAnimated hasError={hasError} textChange={textChange} style={style} placeholder={placeholder} ref={ref} value={value} />
    );
};

Input.Btn = ({ hasError, textChange, style, placeholder, shouldFocused, onSubmit }) => {
    return (
        <InputBtn hasError={hasError} textChange={textChange} style={style} placeholder={placeholder} shouldFocused={shouldFocused} onSubmit={onSubmit} />
    );
};

Input.InputNoEdit = ({ style, placeholder, shouldFocused, savedValue }) => {
    return (
        <InputNoEdit style={style} placeholder={placeholder} shouldFocused={shouldFocused} savedValue={savedValue}  />
    );
};


export default Input;
