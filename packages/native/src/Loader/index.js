import React, {useRef} from 'react';
import LottieView from 'lottie-react-native';
import loader from './loader.json';
import {LoaderWrapper} from './Loading.style';

export default function Loader() {
  const loadingRef = useRef();

  return (
    <LoaderWrapper>
      <LottieView
        ref={loadingRef}
        style={{
          height: 100,
          width: 100,
        }}
        autoPlay={true}
        loop={true}
        source={loader}
      />
    </LoaderWrapper>
  );
};

