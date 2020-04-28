import styled from '@emotion/native';
import { H3 } from '../../Text';

export const TimeUnitsWrapper = styled.View`
    align-items: stretch;
    justify-content: flex-start;
    ${props => props.style};
`;

export const UnitItemWrapper = styled.TouchableOpacity`
    align-content: flex-start;
    align-items: ${props => props.isSelected ? 'center' : 'flex-end' };
    justify-content: flex-start;
    flex-direction: row;
    padding: ${props => props.theme.padding} 0;
    background-color: ${props => props.isSelected ? props.theme.color2 : '' };
    border-radius: ${props => props.theme.borderRadius };
    ${props => props.style};
`;

export const VariantWrapper = styled.View`
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: row;
    padding: ${props => props.theme.padding};
    ${props => props.style};
`;

export const VariantText = styled(H3)`
    color: ${props => props.theme.color6 };
    ${props => props.style};
`;
