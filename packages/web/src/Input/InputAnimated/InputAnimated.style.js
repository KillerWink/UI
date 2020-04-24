import styled from '@emotion/styled';

export const InputAnimationWrapper = styled.div`
    flex: 1;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    align-content: center;
    display: flex;
`;

export const LottieWrapper = styled.div`
    height: 100%;
    position: absolute;
    z-index: 0;
    justify-content: center;
`;

export const Input = styled.input`
    height: 100%;
    flex: 1;
    background: none;
    border: none;
    z-index: 1;
    width: calc(${props => props.width}px - ${props => props.theme.padding}*2);
    padding: 0 ${props => props.theme.padding};
    outline: none;
`;
