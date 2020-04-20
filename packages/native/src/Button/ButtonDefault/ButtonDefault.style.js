import styled from '@emotion/native';

export const ButtonWrapper = styled.TouchableWithoutFeedback`
`;

export const ButtonContainer = styled.View`
    align-content: stretch;
    justify-content: center;
    ${props => props.style};
`;
