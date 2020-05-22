import React from 'react';
import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { DEFAULT_PROPS_SCROLLABLE } from './config';
import Header from '../Header';

const { cond, set, lessThan } = Animated;

const ScrollProperties = {
    position: 'absolute',
    zIndex: 11,
    width: '100%',
};

const parseHeight = (setHeight) => {
    const { height } = Dimensions.get('window');
    const heightInt = parseInt(setHeight);
    return Number.isInteger(setHeight) ? setHeight : (height * (heightInt/100));
};

const HeaderScrollable = ({ globalScroll, style = {}, children }) => {

    const scrollDistance = style.height ? parseHeight(style.height) : DEFAULT_PROPS_SCROLLABLE.scrollDistance;

    const headerDiffClamp = Animated.diffClamp(set(globalScroll,
            cond(lessThan(globalScroll, 0), 0, globalScroll)
        ), 0, scrollDistance);

    const headerTranslate = Animated.interpolate(headerDiffClamp, {
        inputRange: [0, scrollDistance],
        outputRange: [0, -scrollDistance],
        extrapolate: 'clamp',
    });

    return (
        <Header
            style={{
                transform: [{translateY: headerTranslate}],
                ...ScrollProperties,
                ...style
            }}
        >
                {children}
        </Header>
    );
};


export default HeaderScrollable;
