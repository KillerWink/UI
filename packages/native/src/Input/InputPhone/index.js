import React, {useState} from 'react';
import PrefixPreview from './PrefixPreview';
import {PrefixInputWrapper, PhoneInput} from './Prefix.style';
import {useTheme} from "emotion-theming";

export default function PrefixGetCountry({country, placeholder, style, hasError, textChange, openPrefixModal, ref}) {
    const [isFocused, setIsFocused] = useState(false);
    const theme = useTheme();
    return (
        <PrefixInputWrapper isFocused={isFocused} hasError={hasError}>
            <PrefixPreview country={country} openPrefixModal={openPrefixModal} />
            <PhoneInput
                ref={ref}
                placeholder={placeholder}
                style={style}
                theme={theme}
                keyboardType="number-pad"
                hasError={hasError}
                onChangeText={text => textChange(text)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </PrefixInputWrapper>
    );
}
