import React, { useRef } from 'react';
import LottieView from "lottie-react-native";
import mark from './mark.json';

const Mark = ({ lineColor = '#5E5E5E' }) => {

    const markRef = useRef();

    return (
        <LottieView
            ref={markRef}
            style={{
                width: 22,
                height: 22
            }}
            autoPlay={true}
            loop={true}
            colorFilters={[{ keypath: 'marker', color: lineColor }]}
            source={mark}
        />
    );
};

export default Mark;
