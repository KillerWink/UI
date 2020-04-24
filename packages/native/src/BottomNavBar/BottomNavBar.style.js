import styled from '@emotion/native';

export const NavContainer = styled.View`
    flex-direction: row;
`;

export const NavItemContainer = styled.View`
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid  ${props => props.theme.color1};
`;
