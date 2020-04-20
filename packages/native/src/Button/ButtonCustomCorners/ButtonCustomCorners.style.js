import styled from '@emotion/native';

export const TopRightCorner = styled.View`
    position: absolute;
    top: 0;
    right: 0;
`;

export const TopLeftCorner = styled.View`
    position: absolute;
    top: 0;
    left: 0;
`;

export const BottomRightCorner = styled.View`
    position: absolute;
    bottom: 0;
    right: 0;
`;

export const BottomLeftCorner = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
`;

export const ButtonCornerWrapper = styled.View`
    flex: 1;
    min-height: 78px;
    min-width: 78px;
    border-radius: 40px;
    ${props => props.style};
`;
