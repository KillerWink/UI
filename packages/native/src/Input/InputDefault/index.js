import React, { useState } from 'react';
import { useTheme } from 'emotion-theming';
import { InputContainer, Input } from './InputDefault.style';

const InputDefault = ({ hasError, textChange, style, placeholder, ref, keyboardType, autoCapitalize }) => {
    const theme = useTheme();
    const [isFocused, setIsFocused] = useState(false);

    return (
        <InputContainer theme={theme} style={style}>
            <Input
                ref={ref}
                autoCapitalize={autoCapitalize}
                placeholder={placeholder}
                style={style}
                theme={theme}
                keyboardType={keyboardType}
                isFocused={isFocused}
                hasError={hasError}
                onChangeText={text => textChange(text)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </InputContainer>
    );
};

export default InputDefault;
