import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Easing } from 'reanimated-easing';

const {
    cond,
    set,
    Value,
    Clock,
    startClock,
    timing,
    clockRunning,
    block,
    stopClock,
    call,
} = Animated;

export default function AnimateSelectedItem({ children, selectedState, animate }) {

    const [ animationState, setAnimationState ] = useState(true);

    function runTiming(clock, value, dest) {
        const state = {
            finished: new Value(0),
            position: value,
            time: new Value(0),
            frameTime: new Value(0),
        };

        const config = {
            duration: 300,
            toValue: dest,
            easing: Easing.easeOutElastic,
        };
        return block([
            cond(clockRunning(clock), 0, [
                set(state.finished, 0),
                set(state.time, 0),
                set(state.position, value),
                set(state.frameTime, 0),
                set(config.toValue, dest),
                startClock(clock)
            ]),
            timing(clock, state, config),
            cond(state.finished, stopClock(clock)),
            cond(state.finished, call([], () => {
                setAnimationState(false);
            })),
            state.position,
        ]);
    };

    const trans = animate ? runTiming(new Clock(), new Value(0.8), new Value(1)) : 1;
    const trans2 = animate ?  runTiming(new Clock(), new Value(0), new Value(20)) : 20;

    if(!selectedState) {
        return (
            <View>
                {children}
            </View>
        );
    }

    return (
        <Animated.View
            style={{ transform: [{
                    scale: trans,
                }],
                paddingVertical: trans2,
            }}
        >
            {children}
        </Animated.View>
    );
}
