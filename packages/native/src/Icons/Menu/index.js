import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import LottieView from "lottie-react-native";
import changeSVGColor from '@killerwink/react-lottie-color';
import hamburger from './hamburger.json';

const Menu = ({ color = '#5E5E5E' }) => {

    const menuRef = useRef();

    return (
        <LottieView
            ref={menuRef}
            style={{
                width: '100%',
                height: '100%'
            }}
            loop={false}
            source={changeSVGColor(hamburger, color)}
        />
    );
};

Menu.propTypes = {
    styles: PropTypes.object,
};

export default Menu;
