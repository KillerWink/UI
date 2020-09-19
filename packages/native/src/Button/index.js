import React from 'react';
import ButtonDefault from './ButtonDefault';
import ButtonAnimated from './ButtonAnimated';
import ButtonAnimatedFullWidth from './ButtonAnimatedFullWidth';
import ButtonCustomCorners from './ButtonCustomCorners';
import ButtonAutoPlay from './ButtonAutoPlay';
import BtnNormal from "./ButtonNormal";

const Button = ({ children, color = '#5E5E5E', style }) => {
    return (
        <ButtonDefault color={color} style={style}>
            {children}
        </ButtonDefault>
    );
};

Button.Animated = (props) => {
    const { children, color = '#5E5E5E', styles } = props;
    return (
        <ButtonAnimated {...props} color={color} styles={styles}>
            { children }
        </ButtonAnimated>
    );
};

Button.AnimatedFullWidth = (props) => {
    const { children, color = '#5E5E5E', styles } = props;
    return (
        <ButtonAnimatedFullWidth {...props} color={color} styles={styles}>
            { children }
        </ButtonAnimatedFullWidth>
    );
};

Button.AutoPlay = (props) => {
    const { children, color = '#5E5E5E', styles } = props;
    return (
        <ButtonAutoPlay {...props} color={color} styles={styles}>
            { children }
        </ButtonAutoPlay>
    );
};

Button.Cornered = ({ children, style }) => {
    return (
        <ButtonCustomCorners style={style}>
            { children }
        </ButtonCustomCorners>
    );
};

Button.Normal = (props) => {
    const { children, color = '#5E5E5E', styles } = props;
    return (
        <BtnNormal {...props} color={color} styles={styles}>
            { children }
        </BtnNormal>
    );
};

export default Button;
