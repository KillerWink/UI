import styled from '@emotion/native';

export const H1 = styled.Text`
    font-size: ${props => props.theme.large};
    font-family: ${props => props.theme.fontFamily1};
    ${props => props.style};
`;

export const H2 = styled.Text`
    font-size: ${props => props.theme.medium};
    font-family: ${props => props.theme.fontFamily1};
    ${props => props.style};
`;

export const H3 = styled.Text`
    font-size: ${props => props.theme.small};
    font-family: ${props => props.theme.fontFamily1};
    ${props => props.style};
`;

export const Span = styled.Text`
   font-size: ${props => props.theme.small};
   font-family: ${props => props.theme.fontFamily2};
    ${props => props.style};
`;

export const P = styled.Text`
    font-size: ${props => props.theme.small};
    font-family: ${props => props.theme.fontFamily2};
    ${props => props.style};
`;
