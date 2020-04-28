import styled from '@emotion/native';

export const PaxWrapper = styled.View`
    align-items: stretch;
    justify-content: center;
    flex-direction: row;
    padding: ${props => props.theme.padding };
    ${props => props.style};
`;

export const LeftPad = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    padding: ${props => props.theme.padding };
    margin: ${props => props.theme.margin };
    ${props => props.style};
`;

export const Increment = styled.View`
    align-items: center;
    justify-content: center;
    min-width: 100px;
    padding: ${props => props.theme.padding };
    margin: ${props => props.theme.margin };
    ${props => props.style};
`;

export const RightPad = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    padding: ${props => props.theme.padding };
    margin: ${props => props.theme.margin };
    ${props => props.style};
`;

