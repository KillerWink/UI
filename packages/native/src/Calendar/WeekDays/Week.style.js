import styled from '@emotion/native';
import { H3, H2 } from '../../Text';

const backgroundSelector = ({isSelected, isActive, theme}) => {
    if(isActive){
        return isSelected ? theme.color2 : theme.color5
    }
    return theme.color8;
};

export const WeekDaysWrapper = styled.View`
    align-items: stretch;
    justify-content: flex-start;
    ${props => props.style};
`;

export const WeekItemWrapper = styled.TouchableOpacity`
    align-content: flex-start;
    align-items: ${props => props.isSelected ? 'center' : 'flex-end' };
    justify-content: flex-start;
    flex-direction: row;
    padding: ${props => props.theme.padding} 0;
    background-color: ${ props => backgroundSelector(props) };
    border-radius: ${props => props.isActive && props.theme.borderRadius };
    border-bottom-width: 1px;
    border-color: ${props => props.theme.color8 };
    ${props => props.style};
`;

export const LoadMore = styled.TouchableOpacity`
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: row;
    ${props => props.style};
`;

export const MonthWrapper = styled.View`
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: row;
    padding: ${props => props.theme.padding};
    ${props => props.style};
`;

export const MonthText = styled(H3)`
    color: ${props => props.theme.color6 };
    ${props => props.style};
`;

export const WeekHelpWrapper = styled.View`
    align-items: stretch;
    justify-content: flex-end;
    flex-direction: row;
    min-height: 20px;
    padding: ${props => props.theme.padding};
    ${props => props.style};
`;

export const WeekHelpText = styled(H3)`
    color: ${props => props.theme.color1 };
    ${props => props.style};
`;
