import React, { useState } from 'react';
import { useTheme } from 'emotion-theming';
import { InputContainer, Input } from './InputDefault.style';

const InputDefault = ({ hasError, textChange, style }) => {
    const theme = useTheme();
    const [isFocused, setIsFocused] = useState(false);

    return (
        <InputContainer theme={theme} style={style}>
            <Input
                theme={theme}
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
