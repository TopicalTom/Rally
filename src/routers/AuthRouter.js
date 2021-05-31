import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Router
import SignupRouter from './SignupRouter';

// Screens
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const AuthRouter = () => {
    const navigation = useNavigation();

    return (
        <Stack.Navigator 
            initialRouteName="Signup"
            screenOptions={() => {
                return {
                    headerTintColor: '#FD2D55',
                    headerTitle: null,
                    headerTransparent: true,
                    headerLeft: null,
                    headerStyle: {
                        height: 50,
                    },
                    headerLeftContainerStyle: {
                        top: -40
                    },
                    headerRightContainerStyle: {
                        top: -40,
                        paddingRight: 16
                    },
                    headerBackTitleVisible: false,
                    headerRight: () => (
                        <Button
                            title="Cancel"
                            color="#717273"
                            onPress={() => navigation.goBack('Welcome')}
                        />
                    )
                }
            }}>
            <Stack.Screen 
                name="Signup" 
                component={SignupRouter} 
                options={() => ({ 
                    headerShown: true,
                    headerLeft: null,
                })}
            />
            <Stack.Screen 
                name="Login" 
                component={LoginScreen} 
                options={() => ({ 
                    headerShown: true,
                    headerLeft: null,
                })}
            />
        </Stack.Navigator>
    );
};

export default AuthRouter;