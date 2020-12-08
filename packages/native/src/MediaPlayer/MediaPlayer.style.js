import styled from '@emotion/native';

export const RoundedCorners = styled.View`
    overflow: hidden;
    border-radius: ${props => props.theme.borderRadius };
    ${props => props.style};
    flex: 1;
    align-items: stretch;
`;

