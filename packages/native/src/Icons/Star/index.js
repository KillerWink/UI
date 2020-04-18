import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import LottieView from "lottie-react-native";
import changeSVGColor from '@killerwink/lottie-react-native-color';
import star from './star.json';

const Star = ({ color = '#5E5E5E' }) => {

    const starRef = useRef();

    return (
        <LottieView
            ref={starRef}
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
