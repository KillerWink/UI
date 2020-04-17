import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import Lottie from 'react-lottie';
import loader from './assets/loader.json'
import { ImageLoaderWrapper, ImageComponent } from './ImageLoader.style';


const ImageLoader = ({ imageUrl, styles = {} }) => {
    const theme = useTheme();
    const [showImage, setShowImage] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loader,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <ImageLoaderWrapper theme={theme} styles={styles}>
            { !showImage &&
            <Lottie options={defaultOptions}
                    height={'100%'}
                    width={'100%'}  />
            }
            <ImageComponent
                src={imageUrl}
                onLoad={() => setShowImage(true)}
                showImage={showImage}
            />
        </ImageLoaderWrapper>
    );
};

ImageLoader.propTypes = {
    image: PropTypes.string,
    title: PropTypes.node,
    details: PropTypes.node,
    styles: PropTypes.object,
};

export default ImageLoader;
