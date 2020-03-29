import styled from '@emotion/styled';

export const HeaderWrapper = styled.View`
    alignItems: center;
    justifyContent: flex-end;
    height: 80px;
    padding: ${props => props.theme.padding}px;
    padding-top: ${props => props.theme.padding}px;
    background-color: ${props => props.theme.color1};
`;

export const HeaderContainer = styled.View`
    flex: 1;
    alignItems: stretch;
    justifyContent: center;
    flexDirection: row;
`;
