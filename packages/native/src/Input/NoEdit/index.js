import React, { useState } from 'react';
import { useTheme } from 'emotion-theming';
import { InputContainer, Input } from './NoEdit.style';

const InputNoEdit = ({ savedValue, style, placeholder, ref, keyboardType, autoCapitalize }) => {
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
            >{savedValue}</Input>
        </InputContainer>
    );
};

export default InputNoEdit;
