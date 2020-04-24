import styled from '@emotion/native';

export const IconWrapper = styled.View`
    alignItems: center;
    justify-content: center;
    height: ${props => props.theme[props.size]};
    width: ${props => props.theme[props.size]};
    margin: ${props => props.theme.margin};
    ${props => props.style};
`;
