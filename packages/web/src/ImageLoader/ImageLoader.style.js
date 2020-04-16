import styled from '@emotion/native';
import LottieView from 'lottie-react-native';

export const ImageLoaderWrapper = styled.div`
    flex: 1;
    align-items: stretch;
    justify-content: center;
`;

export const ImagePreload = styled(LottieView)`
    flex: 1;
    align-items: stretch;
    justify-content: center;
`;

export const ImageComponent = styled.img`
    flex: 1;
    align-items: start;
    justify-content: center;
    opacity: ${props => props.showImage ? 1 : 0};
`;
