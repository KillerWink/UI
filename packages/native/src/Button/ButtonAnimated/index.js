import React, { useRef } from 'react';
import { View } from 'react-native';
import { useTheme } from 'emotion-theming';
import LottieView from "lottie-react-native";
import changeSVGColor from '@killerwink/react-lottie-color';
import button from './button.json';
import { ButtonAnimationWrapper, ButtonContentWrapper } from './ButtonAnimated.style';

const ButtonAnimated = (props) => {
    const { children, color, styles } = props;
    const buttonRef = useRef();
    const theme = useTheme();

    return (
        <ButtonAnimationWrapper theme={theme} {...props} styles={styles}>
            <ButtonContentWrapper>
            <LottieView
                ref={buttonRef}
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
            </ButtonContentWrapper>
        </ButtonAnimationWrapper>
    );
};

export default ButtonAnimated;
