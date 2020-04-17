import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import LottieView from 'lottie-react-native';
import { ImageLoaderWrapper, ImageComponent } from './ImageLoader.style';
import loader from './assets/lottie20.json';


const ImageLoader = ({ imageUrl }) => {
    const theme = useTheme();
    const [showImage, setShowImage] = useState(false);

    return (
        <ImageLoaderWrapper theme={theme}>
            {!showImage && <LottieView
                source={loader}
                autoPlay
                loop
            /> }
            <ImageComponent
                source={{ uri: imageUrl }}
                showImage={showImage}
                onLoad={() => setShowImage(true)}
                resizeMode="cover"
            />
        </ImageLoaderWrapper>
    );
};

ImageLoader.propTypes = {
    imageUrl: PropTypes.string,
};

export default ImageLoader;
