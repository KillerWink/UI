import styled from '@emotion/styled';

export const ImageLoaderWrapper = styled.div`
    flex: 1;
    align-items: stretch;
    justify-content: center;
`;

export const ImagePreload = styled.div`
    flex: 1;
    align-items: stretch;
    justify-content: center;
`;

export const ImageComponent = styled.img`
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    object-fit: cover;
    opacity: ${props => props.showImage ? 1 : 0};
`;
