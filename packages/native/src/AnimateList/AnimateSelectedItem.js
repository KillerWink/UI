import React, { useEffect, useState, useRef } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Easing } from 'reanimated-easing';
import { TouchableOpacity } from 'react-native-gesture-handler';


const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
export default function AnimateSelectedItem({ children, animatable, pressed }) {

    const scaleAnim = useRef(new Animated.Value(1)).current;

    const animate = (pressed) => {
        scaleAnim.setValue(0.8);
        Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 200,
            easing: Easing.easeOutCirc,
            useNativeDriver: true,
        }).start();
        pressed();
    };

    return (
        <AnimatedTouchable onPress={() => animatable && animate(pressed)}
            style={{
                transform: [
                    {
                        scale: scaleAnim,
                    },
                ],
                flex: 1,
            }}
        >
            {children}
        </AnimatedTouchable>
    );
}
