import React, { useState, useEffect } from 'react';
import lottie from 'lottie-web';
import loader from './assets/loader.json'
import { ImageLoaderWrapper, ImagePreload, ImageComponent } from './ImageLoader.style';


const ImageLoader = ({ imageUrl }) => {
    const theme = useTheme();
    const [showImage, setShowImage] = useState(false);

    const animBox = useRef();

    const animObj = lottie.loadAnimation({
        container: animBox,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: loader
    });

    useEffect(
        () => {
            animObj.play();
            return () => {
                animObj.stop();
            };
        },
        [],
    );

    return (
        <ImageLoaderWrapper theme={theme} styles={styles}>
            { showImage || <ImagePreload ref={animBox} /> }
            <ImageComponent
                style={styles.stretch}
                src={imageUrl}
                onLoad={setShowImage(true)}
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
