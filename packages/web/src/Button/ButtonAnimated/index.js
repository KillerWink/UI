import React from 'react';
import { useTheme } from 'emotion-theming';
import Lottie from 'react-lottie';
import changeSVGColor from '@killerwink/react-lottie-color';
import button from './button.json';
import { ButtonAnimationWrapper, LottieWrapper } from './ButtonAnimated.style';

const ButtonAnimated = ({ children, color, style }) => {
    const theme = useTheme();

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: changeSVGColor(button, color),
        rendererSettings: {
            preserveAspectRatio: 'viewBoxOnly'
        }
    };

    return (
        <ButtonAnimationWrapper theme={theme} style={style}>
            <LottieWrapper>
                <Lottie options={defaultOptions}
                        height={'100%'}
                        width={'100%'}  />
            </LottieWrapper>
            {children}
        </ButtonAnimationWrapper>
    );
};

export default ButtonAnimated;
