import styled from '@emotion/native';
import Animated from 'react-native-reanimated';

export const HeaderWrapper = styled(Animated.View)`
    align-items: stretch;
    background-color: ${props => props.theme.color1};
    ${props => props.styles};
    height: ${props => props.height}px;
`;

export const HeaderContainer = styled.View`
    flex: 1;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
`;
