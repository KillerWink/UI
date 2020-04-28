import styled from '@emotion/native';

export const CalendarWrapper = styled.View`
    align-items: stretch;
    justify-content: center;
    flex: 1;
    margin: ${props => props.theme.margin} 0;
    ${props => props.style};
`;
