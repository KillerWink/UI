import React, {useEffect, useRef, useState} from 'react';
import { useTheme } from 'emotion-theming';
import LottieView from "lottie-react-native";
import { InputContainer, Input, InputBackground, InputSpacing, InputButton } from './InputSend.style';
import send from './send.json';

const InputBtn = ({ hasError, textChange, style, placeholder, shouldFocused }) => {
    const theme = useTheme();
    const sendRef = useRef();
    const inputRef = useRef();
    const [isFocused, setIsFocused] = useState(false);
    const [hasText, setHasText] = useState(false);
    const [hideIcon, setHideIcon] = useState(false);

    useEffect(() => {
        if(shouldFocused) inputRef.current.focus();
    }, [shouldFocused]);

    return (
        <InputContainer theme={theme} styles={style}>
            <Input
                placeholder={placeholder}
                theme={theme}
                ref={inputRef}
                isFocused={isFocused}
                hasError={hasError}
                onChangeText={text => {
                    textChange(text);
                    setHasText(text || false);
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <InputButton>
                <LottieView
                    ref={sendRef}
                    style={{
                        width: 20,
                        height: 'auto',
                    }}
                    loop={false}
                    colorFilters={[{keypath: 'send', color: theme.color5}]}
                    source={send}
                />
            </InputButton>
        </InputContainer>
    );
};

export default InputBtn;
