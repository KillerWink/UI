import React, {useEffect, useRef, useState} from 'react';
import { useTheme } from 'emotion-theming';
import LottieView from "lottie-react-native";
import { InputContainer, Input, InputBackground } from './InputAnimated.style';
import search from './searchani.json';

const InputAnimated = ({ hasError, textChange, style }) => {
    const theme = useTheme();
    const searchRef = useRef();
    const [isFocused, setIsFocused] = useState(false);
    const [hasText, setHasText] = useState(false);
    const [hideIcon, setHideIcon] = useState(false);


    useEffect(() => {
        if(!hasText){
           if(isFocused){
               searchRef.current.play(0, 15);
           }else{
               setHideIcon(false);
               searchRef.current.play(15, 30);
           }
        }
    }, [isFocused]);


    return (
        <InputContainer theme={theme} styles={style}>
            <InputBackground hideIcon={hideIcon}>
                <LottieView
                    ref={searchRef}
                    style={{
                        width: 20,
                        height: 'auto'
                    }}
                    loop={false}
                    colorFilters={[{keypath: 'search_animation', color: theme.color6}]}
                    onAnimationFinish = {() => setHideIcon(hasText || isFocused)}
                    source={search}
                />
            </InputBackground>
            <Input
                theme={theme}
                isFocused={isFocused}
                hasError={hasError}
                onChangeText={text => {
                    textChange(text);
                    setHasText(text || false);
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </InputContainer>
    );
};

export default InputAnimated;
