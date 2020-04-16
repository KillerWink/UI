import styled from '@emotion/native';

export const CardWrapper = styled.div`
    alignItems: stretch;
    justify-content: center;
    height: 220px;
    margin: 0 ${props => props.theme.margin};
    ${props => props.styles};
`;

export const CardImage = styled.div`
    flex: 1;
    align-items: stretch;
    justify-content: center;
`;

export const CardTextWrapper = styled.div`
    flex: 1;
    align-items: start;
    justify-content: center;
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
