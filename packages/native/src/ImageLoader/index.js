import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImageLoaderWrapper, ImagePreload, ImageComponent } from './ImageLoader.style';
import loader from './assets/loader.json';


const ImageLoader = ({ imageUrl }) => {
    const theme = useTheme();
    const [showImage, setShowImage] = useState(false);

    return (
        <ImageLoaderWrapper theme={theme} styles={styles}>
            { showImage || <ImagePreload showImage={showImage} source={loader} autoPlay loop /> }
            <ImageComponent
                style={styles.stretch}
                source={{ uri: imageUrl }}
                onLoad={setShowImage(true)}
                showImage={showImage}
            />
        </ImageLoaderWrapper>
    );
};

ImageLoader.propTypes = {
    imageUrl: PropTypes.string,
};

export default ImageLoader;
