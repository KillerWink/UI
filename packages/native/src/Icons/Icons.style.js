import styled from '@emotion/native';

export const IconWrapper = styled.View`
    alignItems: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    margin: ${props => props.theme.margin};
    ${props => props.styles};
`;
