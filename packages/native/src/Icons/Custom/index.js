import React, { useRef } from 'react';
import LottieView from "lottie-react-native";

const Custom = ({ svg, color = [] }) => {

    const backRef = useRef();

    return (
        <LottieView
            ref={backRef}
            style={{
                width: '100%',
                height: '100%'
            }}
            autoPlay={false}
            loop={false}
            colorFilters={color}
            source={svg}
        />
    );
};

export default Custom;
