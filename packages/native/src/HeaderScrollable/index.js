import React from 'react';
import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { DEFAULT_PROPS_SCROLLABLE } from './config';
import Header from '../Header';
import { SafeAreaView } from 'react-native';

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

const HeaderScrollable = ({ globalScroll, style = {}, children, scrollDistanceHeight, height, StatusBarOptions }) => {

    const scrollDistance = scrollDistanceHeight ? scrollDistanceHeight : parseHeight(style.height);

    const headerDiffClamp = Animated.diffClamp(set(globalScroll,
            cond(lessThan(globalScroll, 0), 0, globalScroll)
        ), 0, scrollDistance);

    const headerTranslate = Animated.interpolate(headerDiffClamp, {
        inputRange: [0, scrollDistance],
        outputRange: [0, -scrollDistance],
        extrapolate: 'clamp',
    });

    return (
        <SafeAreaView>
        <Header
            style={{
                transform: [{translateY: headerTranslate}],
                ...ScrollProperties,
                ...style
            }}
            StatusBarOptions={StatusBarOptions}
            height={height}
        >
                {children}
        </Header>
        </SafeAreaView>
    );
};


export default HeaderScrollable;
