import styled from '@emotion/native';

export const ButtonRounded = styled.TouchableOpacity`
    align-content: center;
    justify-content: center;
    flex: 1;
    background-color: ${ props => props.color };
    border-radius: 50px;
    padding: ${props => props.theme.padding};
    ${props => props.style};
`;
