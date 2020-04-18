import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import LottieView from "lottie-react-native";
import changeSVGColor from '@killerwink/lottie-react-native-color';
import star from './star.json';

const Star = ({ color }) => {

    const star = useRef();

    return (
        <LottieView
            ref={star}
            style={{
                width: '100%',
                height: '100%'
            }}
            loop={false}
            source={changeSVGColor(star, color)}
        />
    );
};

Star.propTypes = {
    styles: PropTypes.object,
};

export default Star;
