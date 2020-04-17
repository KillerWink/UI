import styled from '@emotion/styled';

export const CardWrapper = styled.div`
    alignItems: stretch;
    justify-content: center;
    min-height: 220px;
    max-width: 400px;
    margin: ${props => props.theme.margin} 0;
    ${props => props.styles};
`;

export const CardImage = styled.div`
    flex: 1;
    height: 220px;
    align-items: stretch;
    justify-content: center;
    overflow: hidden;
    border-radius: ${props => props.theme.borderRadius};
`;

export const CardTextTitle = styled.div`
    flex: 1;
    align-items: start;
    justify-content: center;
`;

export const CardTextDetails = styled.div`
    flex: 1;
    align-items: start;
    justify-content: center;
`;
