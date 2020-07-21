import React, { useRef, useState } from 'react';
import { useTheme } from 'emotion-theming';
import LottieView from "lottie-react-native";
import input from './input.json';
import { InputAnimationWrapper, InputWrapper } from './InputAnimated.style';

const InputAnimated = ({ children, color, styles }) => {
    const inputRef = useRef();
    const theme = useTheme();
    const [inputWidth, setInputWidth] = useState();

    return (
        <InputAnimationWrapper theme={theme} styles={styles}>
            <LottieView
                ref={inputRef}
                style={{
                    height: '100%',
                    position: 'absolute',
                    zIndex: 0,
                }}
                loop={false}
                onLayout={(event) => setInputWidth(event.nativeEvent.layout.width)}
                source={input}
                colorFilters={[{ keypath: 'input', color: color }]}
            />
            {children}
            <InputWrapper width={inputWidth} />
        </InputAnimationWrapper>
    );
};

export default InputAnimated;
