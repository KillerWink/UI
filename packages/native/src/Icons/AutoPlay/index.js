import React, { useRef } from 'react';
import LottieView from "lottie-react-native";

const AutoPlay = ({ svg, color = '#5E5E5E' }) => {

    const autoplayRef = useRef();

    return (
        <LottieView
            ref={autoplayRef}
            style={{
                width: '100%',
                height: '100%'
            }}
            autoPlay={true}
            loop={true}
            colorFilters={color}
            source={svg}
        />
    );
};

export default AutoPlay;
