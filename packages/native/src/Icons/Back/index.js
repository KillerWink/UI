import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import LottieView from "lottie-react-native";
import changeSVGColor from '@killerwink/lottie-react-native-color';
import backSvg from './back-button.json';

const Back = ({ color = '#5E5E5E' }) => {

    const back = useRef();

    return (
        <LottieView
            ref={back}
            style={{
                width: '100%',
                height: '100%'
            }}
            loop={false}
            source={changeSVGColor(backSvg, color)}
        />
    );
};

Back.propTypes = {
    styles: PropTypes.object,
};

export default Back;
