import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Bootstrap from '../Bootstrap';

const Stack = createSharedElementStackNavigator();

const RootApp = ({ children }) => {
    return (
        <Bootstrap>
            <NavigationContainer>
                { children }
            </NavigationContainer>
        </Bootstrap>
    );
};

export default RootApp;
