import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from 'emotion-theming';
import { InputContainer, Input } from './InputDefault.style';

const InputOTP = ({ hasError, style, submitCode, autoCapitalize }) => {
    const theme = useTheme();
    const ref_input0 = useRef();
    const ref_input1 = useRef();
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const [isFocused, setIsFocused] = useState(false);
    const [code, setCode] = useState([false, false, false, false]);

    const textChange = (text, index, ref) => {
        let newCodes = [...code];
        newCodes[index] = isNaN(text) ? false : text;
        setCode(newCodes);
        !isNaN(text) && ref.current.focus();
    }

    useEffect(() => {
        if(!code.includes(false)){
            submitCode(code);
        }
    }, [code]);

    return (
        <InputContainer theme={theme} style={style}>
            <Input
                maxLength={1}
                autoFocus={true}
                ref={ref_input0}
                autoCapitalize={autoCapitalize}
                style={style}
                theme={theme}
                keyboardType="number-pad"
                isFocused={isFocused}
                hasError={hasError}
                onChangeText={text => textChange(text, 0, ref_input1)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <Input
                maxLength={1}
                ref={ref_input1}
                autoCapitalize={autoCapitalize}
                style={style}
                theme={theme}
                keyboardType="number-pad"
                isFocused={isFocused}
                hasError={hasError}
                onChangeText={text => textChange(text, 1, ref_input2)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <Input
                maxLength={1}
                ref={ref_input2}
                autoCapitalize={autoCapitalize}
                style={style}
                theme={theme}
                keyboardType="number-pad"
                isFocused={isFocused}
                hasError={hasError}
                onChangeText={text => textChange(text, 2, ref_input3)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <Input
                maxLength={1}
                ref={ref_input3}
                autoCapitalize={autoCapitalize}
                style={style}
                theme={theme}
                keyboardType="number-pad"
                isFocused={isFocused}
                hasError={hasError}
                onChangeText={text => textChange(text, 3, ref_input0)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </InputContainer>
    );
};

export default InputOTP;
