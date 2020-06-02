import React from 'react';
import { TouchableOpacity } from 'react-native';
import BottomNavItem from './BottomNavItem';

const BottomNavController = ({ state, descriptors, navigation, children }) => {
    return (
            state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ alignSelf: 'stretch' }}
                        key={index}
                    >
                        <BottomNavItem isFocused={isFocused} TabElements={options.TabElements} />
                    </TouchableOpacity>
                );
            })
    );
};

export default BottomNavController;
