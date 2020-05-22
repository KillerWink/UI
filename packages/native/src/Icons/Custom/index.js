import React, { useRef } from 'react';
import LottieView from "lottie-react-native";
import changeSVGColor from '@killerwink/react-lottie-color';

const Custom = ({ svg, color = '#5E5E5E' }) => {

    const backRef = useRef();

    return (
        <LottieView
            ref={backRef}
            style={{
                width: '100%',
                height: '100%'
            }}
            loop={false}
            source={changeSVGColor(svg, color)}
        />
    );
};

export default Custom;
