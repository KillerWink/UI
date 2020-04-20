import React, { useRef } from 'react';
import { useTheme } from 'emotion-theming';
import LottieView from "lottie-react-native";
import changeSVGColor from '@killerwink/react-lottie-color';
import button from './button.json';
import { ButtonAnimationWrapper } from './ButtonAnimated.style';

const ButtonAnimated = ({ children, color, styles }) => {
    const backRef = useRef();
    const theme = useTheme();

    return (
        <ButtonAnimationWrapper theme={theme} styles={styles}>
            <LottieView
                ref={backRef}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    zIndex: 0,
                }}
                loop={false}
                source={changeSVGColor(button, color)}
            />
            {children}
        </ButtonAnimationWrapper>
    );
};

export default ButtonAnimated;
