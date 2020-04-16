import styled from '@emotion/native';

export const CardWrapper = styled.View`
    alignItems: stretch;
    justify-content: center;
    height: 220px;
    margin: 0 ${props => props.theme.margin};
    ${props => props.styles};
`;

export const CardImage = styled.View`
    flex: 1;
    align-items: stretch;
    justify-content: center;
`;

export const CardTextWrapper = styled.View`
    flex: 1;
    align-items: start;
    justify-content: center;
`;

export const CardTextTitle = styled.View`
    flex: 1;
    align-items: start;
    justify-content: center;
`;

export const CardTextDetails = styled.View`
    flex: 1;
    align-items: start;
    justify-content: center;
`;
