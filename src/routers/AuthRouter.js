import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Router
import SignupRouter from './SignupRouter';

// Screens
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const AuthRouter = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Signup">
            <Stack.Screen 
                name="Signup" 
                component={SignupRouter} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Stack.Screen 
                name="Login" 
                component={LoginScreen} 
                options={() => ({ 
                    headerShown: true,
                    headerTintColor: '#FD2D55',
                    headerTitle: null,
                    headerTransparent: true,
                    headerBackTitleVisible: false
                })}
            />
        </Stack.Navigator>
    );
};

export default AuthRouter;