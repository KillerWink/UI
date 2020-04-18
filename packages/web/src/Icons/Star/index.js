import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import changeSVGColor from '@killerwink/lottie-react-native-color';
import star from './star.json';

const Star = ({ color = '#5E5E5E' }) => {

    const defaultOptions = {
        animationData: changeSVGColor(star, color),
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

Star.propTypes = {
    styles: PropTypes.object,
};

export default Star;
