import styled from '@emotion/native';
import Animated from 'react-native-reanimated';

export const HeaderWrapper = styled(Animated.View)`
    alignItems: center;
    justify-content: flex-end;
    height: 80px;
    background-color: ${props => props.theme.color1};
    ${props => props.styles};
`;

export const HeaderContainer = styled.View`
    flex: 1;
    align-items: stretch;
    justify-content: center;
    flex-direction: row;
`;
