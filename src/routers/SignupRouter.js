import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import MethodsScreen from '../screens/MethodsScreen';
import EmailScreen from '../screens/EmailScreen';
import PhoneScreen from '../screens/PhoneScreen';

const Stack = createStackNavigator();

const SignupRouter = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Methods"
            screenOptions={() => {
                return {
                    headerTintColor: '#FD2D55',
                    headerTitle: null,
                    headerTransparent: true,
                    headerBackTitleVisible: false
                }
            }}>
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
                    headerShown: true,
                })}
            />
            <Stack.Screen 
                name="Phone" 
                component={PhoneScreen} 
                options={() => ({ 
                    headerShown: true,
                })}
            />
        </Stack.Navigator>
    );
};

export default SignupRouter;