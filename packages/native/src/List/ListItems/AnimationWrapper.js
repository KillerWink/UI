import React, { Component, useEffect, useState } from 'react';
import { Animated, Easing } from 'react-native';

export default class AnimationWrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scaleValue: new Animated.Value(1000)
        }
    }

    componentDidMount() {
        Animated.timing(this.state.scaleValue, {
            toValue: 0,
            duration : 350,
            delay: this.props.duration,
            easing: Easing.out(Easing.exp),
            useNativeDriver: true
        }).start();
    }

    render() {
        return (
            <Animated.View style={{ transform : [{
                    translateY : this.state.scaleValue,
                }]}}>
                { this.props.children }
            </Animated.View>
        );
    }
}