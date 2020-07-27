import styled from '@emotion/native';

export const InputWrapper = styled.TextInput`
flex: 1;
width: ${props => props.width - (props.theme.padding*2)};
padding: 0 ${props => props.theme.padding};
position: absolute;
height: 100%;
left: 0;
`;

export const InputAnimationWrapper = styled.View`
    flex: 1;
    background-color: red;
    position: relative;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const InputBackground = styled.View`
    flex: 1;
    position: absolute;
    height: 100%;
    left: 0;
`;