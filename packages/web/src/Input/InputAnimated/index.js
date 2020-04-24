import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from 'emotion-theming';
import Lottie from 'react-lottie';
import changeSVGColor from '@killerwink/react-lottie-color';
import input from './input.json';
import { InputAnimationWrapper, LottieWrapper, Input } from './InputAnimated.style';

const InputAnimated = ({ children, color, style }) => {
    const inputRef = useRef(null);
    const theme = useTheme();
    const [inputWidth, setInputWidth] = useState(0);

    useEffect(() => {
            inputRef.current && setInputWidth(inputRef.current.offsetWidth);
    }, [inputRef.current]);

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: changeSVGColor(input, color),
        rendererSettings: {
            preserveAspectRatio: 'viewBoxOnly'
        }
    };

    return (
        <InputAnimationWrapper theme={theme} style={style}>
            <LottieWrapper ref={inputRef}>
                <Lottie
                    options={defaultOptions}
                    height={'100%'}
                />
            </LottieWrapper>
            {children}
            <Input width={inputWidth} theme={theme} />
        </InputAnimationWrapper>
    );
};

export default InputAnimated;
