import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
    align-items: center;
    justify-content: flex-end;
    height: 80px;
    padding: ${props => props.theme.padding};
    padding-top: ${props => props.theme.padding};
    background-color: ${props => props.theme.color1};
`;

export const HeaderContainer = styled.div`
    flex: 1;
    align-items: stretch;
    justify-content: center;
    flex-direction: row;
`;
