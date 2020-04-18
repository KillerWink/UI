import styled from '@emotion/styled';

export const IconWrapper = styled.div`
    alignItems: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    margin: ${props => props.theme.margin};
    ${props => props.styles};
`;
