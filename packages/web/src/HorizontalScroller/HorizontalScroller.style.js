import styled from '@emotion/styled';

export const ScrollWrapper = styled.div`
    flex: 1;
    overflow-x: scroll;
    display: flex;
    scroll-snap-type: x mandatory;
    padding: ${props => props.theme.padding} 0px;
`;

export const ScrollItem = styled.div`
    scroll-snap-align: center;
    display: inline-block;
`;
