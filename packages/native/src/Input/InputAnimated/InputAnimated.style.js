import styled from '@emotion/native';

export const InputWrapper = styled.TextInput`
flex: 1;
width: ${props => props.width - (props.theme.padding*2)};
padding: 0 ${props => props.theme.padding};
`;

export const InputAnimationWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
`;
