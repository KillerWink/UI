import React from 'react';
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
} = Animated;

export default function AnimateItem({ children, duration, direction = 'bottomUp' }) {

    function runTiming(clock, value, dest) {
        const state = {
            finished: new Value(0),
            position: value,
            time: new Value(0),
            frameTime: new Value(0),
        };

        const config = {
            duration: parseInt(duration),
            toValue: dest,
            easing: Easing.easeOutCirc,
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
            state.position,
        ]);
    };

    let transformY = true;
    let trans = runTiming(new Clock(), new Value(1000), new Value(0));

    switch (direction) {
        case 'bottomUp':
             transformY = true;
             trans = runTiming(new Clock(), new Value(1000), new Value(0));
            break;
        case 'leftToRight':
             transformY = false;
             trans = runTiming(new Clock(), new Value(-1000), new Value(0));
            break;
        case 'rightToLeft':
             transformY = false;
             trans = runTiming(new Clock(), new Value(1000), new Value(0));
            break;
    }

    return (
        <Animated.View
            style={
                transformY ? [{
                        transform: [{
                            translateY: trans,
                        }]
                    }]
                    :
                    [
                        {
                            transform: [{
                                translateX: trans,
                            }]
                        }]
            }

        >
            {children}
        </Animated.View>
    );
}
