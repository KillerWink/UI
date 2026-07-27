import React, { useState } from 'react';
import { useTheme } from 'emotion-theming';
import Placeholder from './Placeholder';
import { InputContainer, Input } from './InputDefault.style';

const InputSecondary = ({ hasError, textChange, style, placeholder, ref, keyboardType, autoCapitalize, value, multiline, numberOfLines, maxLength, textSize='small', autoFocus=false }) => {
    const theme = useTheme();
    const [isFocused, setIsFocused] = useState(false);

    return (
        <InputContainer theme={theme} style={style}>
            <Placeholder placeholder={placeholder} full={!isFocused || !value}/>
            <Input
                ref={ref}
                autoCapitalize={autoCapitalize}
                style={style}
                theme={theme}
                keyboardType={keyboardType}
                isFocused={isFocused}
                hasError={hasError}
                onChangeText={text => textChange(text)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={value}
                multiline={multiline}
                numberOfLines={numberOfLines}
                maxLength={maxLength}
                textSize={theme[textSize]}
                autoFocus={autoFocus}
            />
        </InputContainer>
    );
};

export default InputSecondary;
