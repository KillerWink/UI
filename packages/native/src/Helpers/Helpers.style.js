import styled from '@emotion/native';

export const MarginStyle = styled.View`
    margin: ${props => props.theme.margin};
    ${props => props.styles};
`;

export const MarginHorizontalStyle = styled.View`
    margin: 0 ${props => props.theme.margin};
    ${props => props.styles};
`;

export const MarginVerticalStyle = styled.View`
    margin: ${props => props.theme.margin} 0;
    ${props => props.styles};
`;
