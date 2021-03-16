import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import MethodsScreen from '../screens/MethodsScreen';
import EmailScreen from '../screens/EmailScreen';
import PhoneScreen from '../screens/PhoneScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const AuthRouter = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Methods">
            <Stack.Screen 
                name="Methods" 
                component={MethodsScreen} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Stack.Screen 
                name="Email" 
                component={EmailScreen} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Stack.Screen 
                name="Phone" 
                component={PhoneScreen} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
            <Stack.Screen 
                name="Login" 
                component={LoginScreen} 
                options={() => ({ 
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
};

export default AuthRouter;