import React, { useState, useRef, useEffect } from 'react';
import {Animated, Easing} from 'react-native';
import { useTheme } from 'emotion-theming';
import { InputPlaceholder } from './InputDefault.style';

const Placeholder = ({ placeholder, full }) => {
    const theme = useTheme();
    const maximizePlaceholder = useRef(new Animated.Value(0.5)).current;
    const minimizePlaceholder = useRef(new Animated.Value(full ? 1 : 0.5)).current;

    const runAnimationMinimize = () => {
        Animated.timing(minimizePlaceholder, {
            toValue: 0.5,
            duration: 150,
            useNativeDriver: true,
        }).start();
    };

    const runAnimationMaximize = () => {
        Animated.timing(maximizePlaceholder, {
            toValue: 1,
            duration: 150,
            easing: Easing.elastic(),
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        full && runAnimationMaximize();
        !full && runAnimationMinimize();
    }, [full]);

    return (
        <Animated.View
            style={{
                justifyContent: 'center',
                position: 'absolute',
                left: 0,
                top: 0,
                zIndex: 10,
                transform: [{
                    scale: full ? maximizePlaceholder : minimizePlaceholder,
                },
                    {translateY: full ? 0 : -30},
                    {translateX: full ? 0 : -60}
                    ],
            }}>
            <InputPlaceholder theme={theme}>
                {placeholder}
            </InputPlaceholder>
        </Animated.View>
    );
};

export default Placeholder;
