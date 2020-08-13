import React, { useRef, useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';

const AnimationWrapper = ({ children, duration }) => {

    const scaleValue = useRef(new Animated.Value(1000)).current;

    useEffect(() => {
        Animated.timing(scaleValue, {
            toValue: 0,
            duration : 350,
            delay: duration,
            easing: Easing.out(Easing.exp),
            useNativeDriver: true
        }).start();
    }, []);

    return (
        <Animated.View style={{ transform : [{
                translateY : scaleValue,
            }]}}>
            { children }
        </Animated.View>
    );
}

export default AnimationWrapper;
