import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import LottieView from "lottie-react-native";
import changeSVGColor from '@killerwink/lottie-react-native-color';
import hamburger from './hamburger.json';

const Menu = ({ color }) => {

    const menu = useRef();

    return (
        <LottieView
            ref={menu}
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
