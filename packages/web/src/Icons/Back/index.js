import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import changeSVGColor from '@killerwink/lottie-react-native-color';
import backSvg from './back-button.json';

const Back = ({ color }) => {

    const defaultOptions = {
        animationData: changeSVGColor(backSvg, color),
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Lottie options={defaultOptions}
                height={'100%'}
                width={'100%'}  />
    );
};

Back.propTypes = {
    styles: PropTypes.object,
};

export default Back;
