import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import LottieView from "lottie-react-native";
import changeSVGColor from '@killerwink/react-lottie-color';
import search from './search.json';

const Search = ({ color = '#5E5E5E' }) => {

    const searchRef = useRef();

    return (
        <LottieView
            ref={searchRef}
            style={{
                width: '100%',
                height: '100%'
            }}
            loop={false}
            source={changeSVGColor(search, color)}
        />
    );
};

Search.propTypes = {
    styles: PropTypes.object,
};

export default Search;
