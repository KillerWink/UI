import styled from '@emotion/native';

export const ButtonNormal = styled.TouchableOpacity`
    align-content: center;
    justify-content: center;
    flex: 1;
    background-color: ${ props => props.color };
    border-radius: ${ props => props.theme.borderRadiusSmall };
    padding: ${props => props.theme.padding};
    ${props => props.style};
`;
