import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import changeSVGColor from '@killerwink/react-lottie-color';
import search from './search.json';

const Search = ({ color = '#5E5E5E' }) => {

    const defaultOptions = {
        animationData: changeSVGColor(search, color),
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

Search.propTypes = {
    styles: PropTypes.object,
};

export default Search;
