import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
import {ButtonNormal} from './ButtonFullWidthBottom.style';
import {useTheme} from "emotion-theming";

const BtnFullBottom = (props) => {
    const { children, styles, active } = props;
    const theme = useTheme();
    const [isFocused, setIsFocused] = useState(false);

    const _keyboardDidShow = () => {
        setIsFocused(true);
    };

    const _keyboardDidHide = () => {
        setIsFocused(false);
    };

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    if(isFocused) return null;
    return (
        <ButtonNormal active={active} theme={theme} {...props} styles={styles}>
            {children}
        </ButtonNormal>
    );
};

export default BtnFullBottom;
