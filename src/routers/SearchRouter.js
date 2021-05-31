import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Screens
import SearchScreen from '../screens/SearchScreen';
import SearchModal from '../modals/SearchModal';

const Stack = createStackNavigator();

const SearchRouter = () => {
    const navigation = useNavigation();

    return (
        <Stack.Navigator 
            initialRouteName="Categories"
            mode='modal'
            screenOptions={() => {
                return {
                    headerShown: false,
                }
            }}>
            <Stack.Screen 
                name="Categories" 
                component={SearchScreen} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Stack.Screen 
                name="Find" 
                component={SearchModal} 
                options={() => ({ 
                    headerShown: false,
                    gestureEnabled: false
                })}
            />
        </Stack.Navigator>
    );
};

export default SearchRouter;