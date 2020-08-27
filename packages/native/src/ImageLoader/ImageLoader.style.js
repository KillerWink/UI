import styled from '@emotion/native';
import LottieView from 'lottie-react-native';

export const ImageLoaderWrapper = styled.View`
    flex: 1;
    align-items: stretch;
    justify-content: center;
    background-color: ${props => props.theme.color7};
`;

export const ImagePreload = styled(LottieView)`
    flex: 1;
    align-items: stretch;
    justify-content: center;
`;

export const ImageComponent = styled.Image`
    flex: 1;
    justify-content: center;
    opacity: ${props => props.showImage ? 1 : 0};
`;
