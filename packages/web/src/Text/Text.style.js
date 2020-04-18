import styled from '@emotion/native';

export const H1 = styled.h1`
    font-size: ${props => props.theme.large};
    font-family: ${props => props.theme.fontFamily1};
    ${props => props.styles};
`;

export const H2 = styled.h2`
    font-size: ${props => props.theme.medium};
    font-family: ${props => props.theme.fontFamily1};
    ${props => props.styles};
`;

export const H3 = styled.h3`
    font-size: ${props => props.theme.small};
    font-family: ${props => props.theme.fontFamily1};
    ${props => props.styles};
`;

export const Span = styled.span`
   font-size: ${props => props.theme.small};
   font-family: ${props => props.theme.fontFamily2};
    ${props => props.styles};
`;

export const P = styled.p`
    font-size: ${props => props.theme.small};
    font-family: ${props => props.theme.fontFamily2};
    ${props => props.styles};
`;
