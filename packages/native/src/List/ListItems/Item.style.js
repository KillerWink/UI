import styled from '@emotion/native';
import { H3, H2 } from '../../Text';

const backgroundSelector = ({isSelected, isActive, theme}) => {
    if(isActive){
        return isSelected ? theme.color1 : theme.color5
    }
    return theme.color5;
};

export const ListItemsWrapper = styled.View`
    flex: 1;
    align-items: stretch;
    justify-content: flex-start;
    ${props => props.style};
`;

export const ItemWrapperWithCorners = styled.TouchableOpacity`
    align-content: flex-start;
    align-items: ${props => props.isSelected ? 'center' : 'flex-end' };
    justify-content: flex-start;
    flex-direction: row;
    padding: ${props => props.theme.padding} 0;
    background-color: ${ props => backgroundSelector(props) };
    borderTopLeftRadius: ${ props => props.topCorners && props.theme.borderRadius };
    borderTopRightRadius: ${ props => props.topCorners && props.theme.borderRadius };
    borderBottomRightRadius: ${ props => props.bottomCorners && props.theme.borderRadius };
    borderBottomLeftRadius: ${ props => props.bottomCorners && props.theme.borderRadius };
     ${props => props.loading
    &&
    `background-color: ${theme.color7};
    min-height: 75px;
    `
};
    ${props => props.style};
`;

export const ItemWrapperButton = styled.TouchableWithoutFeedback`
`;

export const ItemWrapper = styled.View`
    align-content: flex-start;
    align-items: ${props => props.isSelected ? 'center' : 'flex-end' };
    justify-content: flex-start;
    flex-direction: row;
    padding: ${props => props.theme.padding} 0;
    background-color: ${ props => backgroundSelector(props) };
    margin-left: ${props => props.lineColor && '10px'};
    border-left-width: ${props => props.lineColor && '3px'};
    border-color: ${props => props.lineColor && props.lineColor};
    border-radius: ${props => props.isSelected ? '4px' : '0px' };
     ${props => props.loading
    &&
    `background-color: ${props.theme.color7};
    min-height: 75px;
    `
};
    ${props => props.style};
`;

export const LoadMore = styled.View`
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: row;
    ${props => props.style};
`;

export const DividerItem1Wrapper = styled.View`
    align-items: stretch;
    justify-content: flex-end;
    flex-direction: row;
    padding: 0 ${props => props.theme.margin};
    ${props => props.style};
`;

export const DividerItem1Text = styled(H3)`
    color: ${props => props.theme.color6 };
    ${props => props.style};
`;

export const DividerItem2Wrapper = styled.View`
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    padding: ${props => props.theme.margin} 0;
    padding-bottom: 0;
    ${props => props.style};
`;

export const DividerItem2Text = styled(H3)`
    color: ${props => props.lineColor || props.theme.color1 };
    padding: 0 ${props => props.theme.padding};
    margin-top: 5px;
    ${props => props.style};
`;

export const DividerMark = styled.View`
    width: 22px;
    height: 22px;
    ${props => props.style};
`;
