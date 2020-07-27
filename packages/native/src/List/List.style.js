import styled from '@emotion/native';

export const ListWrapper = styled.View`
    align-items: stretch;
    justify-content: center;
    flex: 1;
    padding: ${props => props.theme.margin} 0;
    ${props => props.style};
`;
