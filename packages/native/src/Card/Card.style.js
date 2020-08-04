import styled from '@emotion/native';

export const CardWrapper = styled.View`
    alignItems: stretch;
    justify-content: center;
    min-height: 200px;
    margin: ${props => props.theme.margin} 0;
    ${props => props.styles};
`;

export const CardImage = styled.View`
    height: 180px;
    flex: 1;
    align-items: stretch;
    justify-content: center;
    overflow: hidden;
    border-radius: ${props => props.theme.borderRadius};
`;

export const CardTextWrapper = styled.View`
    flex: 1;
    align-items: flex-start;
    justify-content: center;
`;

export const CardTextTitle = styled.View`
    flex: 1;
    align-items: flex-start;
    justify-content: center;
`;

export const CardTextDetails = styled.View`
    flex: 1;
    align-items: flex-start;
    justify-content: center;
`;
