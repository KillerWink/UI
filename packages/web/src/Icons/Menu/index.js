import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import changeSVGColor from '@killerwink/react-lottie-color';
import hamburger from './hamburger.json';

const Menu = ({ color = '#5E5E5E' }) => {

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: changeSVGColor(hamburger, color),
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

Menu.propTypes = {
    styles: PropTypes.object,
};

export default Menu;
