import React, { useRef } from 'react';
import { useTheme } from 'emotion-theming';
import LottieView from "lottie-react-native";
import changeSVGColor from '@killerwink/react-lottie-color';
import buttonInvite from './buttoninvite.json';
import { ButtonAnimationWrapper } from './ButtonAnimated.style';

const ButtonAutoPlay = (props) => {
    const { children, color, styles } = props;
    const buttonRef = useRef();
    const theme = useTheme();

    return (
        <ButtonAnimationWrapper theme={theme} {...props} styles={styles}>
            <LottieView
                ref={buttonRef}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    zIndex: 0,
                }}
                autoPlay={true}
                loop={true}
                source={changeSVGColor(buttonInvite, color)}
            />
            {children}
        </ButtonAnimationWrapper>
    );
};

export default ButtonAutoPlay;
